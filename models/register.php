<?php

include "../includes/register.func.php";

if($_POST['submit']){
	//存放注册信息数组
	$_data = array();
	//数据待过滤
	$_data['username'] = _check_username($_POST['username'],5,20);
	$_data['password1'] = _check_password($_POST['password1'],$_POST['c_password1'],6);
	$_data['tittle'] = _check_title($_POST['tittle']);
	$_data['phone'] = _check_data($_POST['phone']);
	$_data['email'] = _check_email($_POST['email']);
	$_data['address'] = _check_data($_POST['address']);

	//将数据插入数据库
	require_once "connection.php";

	//判断邮箱是否已被注册
	$query = "SELECT * FROM ap_user WHERE email='{$_data['email']}'";
	$result_q = mysql_query($query);
	if(mysql_num_rows($result_q) == 1){
		_alert_back("Error：The email has been registered.");
	}

	//如果没有注册
	$sql ="insert into ap_user(username,password,tittle,phone,email,address,reg_time) values('{$_data['username']}','{$_data['password1']}','{$_data['tittle']}','{$_data['phone']}','{$_data['email']}','{$_data['address']}',NOW())";
/*
	if($result = mysql_query($sql)){
		echo "注册成功";
	}else{
		echo "注册失败";
	}
 */
	$result = mysql_query($sql) or trigger_error("Query:$sql\n<br />MySQL ERROR: ".mysql_error());
	if(mysql_affected_rows()==1){ //if it ran ok.

		//send the email
	$emailbody=' Dear Participant, 
		Thank you very much for your registration for APCOM2014. Please submit your abstract before the abstract submission due date on 15 May 2014.
	
		Should you have further enquiries, please do not hesitate to contact us.
	
		Best regards,
		APCOM2014 Secretariat';

	mail($_POST['email'],'Registration Confirmation',$emailbody);

	//Finish the page
	echo '<h3> <p>Thank you for registering!</p></h3><p>A confirmation email has been sent to your address.Please click on the link in that email in order to activate your account.</p>';
	echo ' Click to'." <a href='../subpage/login.html'><b>LOGIN</b></a>";
	}
	mysql_close();
	
}  //if
?>
