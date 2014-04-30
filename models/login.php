<?php

session_start();	

if(isset($_POST['submit'])){  //check if the form has been submit
	require_once ('../models/connection.php');

	require_once ('../includes/register.func.php');

	//Validate the email address
	if(!empty($_POST['email'])){
		$e=_check_email($_POST['email']);
	}else{
		echo '<p><font color="red" size="+1">You forgot to enter your email address!</font></p>';
		$e=FALSE;
	}
	//Validate the password
	if(!empty($_POST['password'])){
		$p=$_POST['password'];
	}else{
		echo '<p><font color="red" size="+1">You forgot to enter your password!</font></p>';
		$p=FALSE;
	}
	
	if($e && $p){  //if everything is ok

		//Query the database
		$query="SELECT id, username FROM ap_user WHERE email='$e' AND password='" . sha1($p) ."'" ;

		$result=mysql_query($query) or trigger_error("Query:$query \n<br />MySQL Error: ".mysql_error());

		if(@mysql_num_rows($result)==1){  //A match was made.

			//Register the values & redirect.
			$row = mysql_fetch_array($result, MYSQL_NUM);
			mysql_free_result($result);
			mysql_close();

			$_SESSION['username'] = $row[1];
			$_SESSION['id'] = $row[0];
/*
			//Start defining the URL.
			$url = 'http://' .$_SERVER['HTTP_HOST'] . dirname($_SERVER['PHP_SELF']);
			//Check for trailing slash
			if((substr($url, -1)=='/') OR (substr($url, -1) =='\\')){
				$url = substr($url, 0, -1);  //chop off the slash.
			}
			//Add the page.
			$url .='/index.html';
 */
			$url = "../subpage/upload_file.html";
			
			ob_end_clean;    //Delete the buffer.
			header("Location: $url");
			exit();  //Quit the script.

		}else{  //No match was made.
			echo '<p><font color="red" size="+1">Login failed.</font></p>';
		}

	}else{  //if everything was not ok.
		echo '<p><fong color="red" size="+1">Please try again.</font><p>';
	}

	mysql_close();

}//End of SUBMIT conditional.

?>
