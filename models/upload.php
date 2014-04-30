<?php

session_start();

require_once ("connection.php");

if($_FILES['upfile']['error'] > 0){
	echo "上传错误： ";
	switch ($_FILES['upfile']['error']){
	case 1:
		echo "The file exceeds the upload_max_filesize setting in php.ini";
		break;
	case 2:
		echo "The file exceeds the MAX_FILE_SIZE setting in the HTML form";
		break;
	case 3:
		echo "The file was only partially uploaded";
		break;
	case 4:
		echo "No file was uploaded";
		break;
	case 6:
		echo "The temporary folder dose not exist.";
		break;
	default:
		print 'Something unforeseen happened.';
		break;
	}
	exit;
}
$uploadfilename = $_FILES['upfile']['name'];
$uploadfilerename = $_SESSION['id'] . '-' . $uploadfilename;
$uploadfile = "../uploads/" . $uploadfilerename;
//允许上传的文件类型
$allowfiletype = array('application/msword','application/vnd.openxmlformats-officedocument.wordprocessingml.document','application/pdf');
if(!in_array($_FILES['upfile']['type'],$allowfiletype)){
	echo "Uploading file's type is not allowed";
	exit();
}	
	
if(is_uploaded_file($_FILES['upfile']['tmp_name'])){
	if(!move_uploaded_file($_FILES['upfile']['tmp_name'],$uploadfile))
	{
		echo "Error:upload file faild, please try again!";
		exit();
	}
}
else{
		echo "Error: uploading file is not available!";
		exit;
}

$query = "INSERT INTO ap_upfiles VALUES({$_SESSION['id']},'{$_SESSION['username']}','$uploadfilename','$uploadfilerename',NOW())";
//mysql_query($query) or trigger_error("Query:$query\n<br />MySQL ERROR: ".mysql_error());
if(!mysql_query($query)){
	echo "You can not upload the same file twice!";
	exit();
}
mysql_close();
echo "File has been uploaded!";
?>
