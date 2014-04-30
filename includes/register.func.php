<?php
/**
 *_alert_back JS弹窗
 *@access public
 *@param $_info 表示弹窗信息
 *@return void 弹窗
 */
function _alert_back($_info){
	echo "<script type='text/javascript'>alert('".$_info."');history.back();</script>";
	exit();
}

/**
 *  转义
 */
function _mysql_string($_string){
	if(!get_magic_quotes_gpc()){
		return mysql_real_escape_string($_string);
	}
	return $_string;
}

/**
 * _check_username 过滤并获得合法数据
 * access public
 * @param string $_string受污染的用户名
 * @param int $min 最小位
 * @param int $max 最大位数
 *
 */
function _check_username($_string,$min,$max){

	//去掉两边空格
	$_string=trim($_string);

	//长度小于$min或大于$max
	if(mb_strlen($_string,'utf-8')<$min||mb_strlen($_string,'utf-8')>$max){
		_alert_back("用户名长度不能小于".$min."位或大于".$max."位");
	}

	//限制敏感字符
	$_char_pattern='/[<>\'\"\ \  ]/';
	if(preg_match($_char_pattern,$_string)){
		_alert_back("用户名不能有敏感字符");
	}

	//将用户名转义输入
	return mysql_real_escape_string($_string);
}

/**
 *_check_password验证密码
 *@access public
 *@param string $_first_pass
 *@param string $_end_pass
 *@param int $min
 *return string $_first_pass 返回加密后的密码
 */
function _check_password($_first_pass,$_end_pass,$_min){
	//判断密码是否
	if(strlen($_first_pass)<$_min){
		_alert_back('密码不能小于'.$_min.'位！');
	}
	//输入的两次密码得一致
	if($_first_pass!=$_end_pass){
		_alert_back('两次输入的密码不一致');
	}

	return sha1($_first_pass);
}

/**
 *_check_email 检查邮箱是否合法
 *@access public
 *@param string $_string 提交的邮箱地址
 *@return string $_string 返回验证后的邮箱
 */
function _check_email($_string){
	//[a-z A-Z 0-9] =>\w
	//[\w\-\.] 16.3.
	//\.[\w+]   .com.com.com.com.net.cn
	if(empty($_string)){
		_alert_back('请输入邮箱');
	}else{
		if(!preg_match('/^[\w\-\.]+@[\w\-\.]+(\.\w+)+$/',$_string)){
			_alert_back('邮箱格式不正确');
		}
	}
	return _mysql_string($_string);
}

/*
 * _check_title 检查title是否合法
 * access public
 * @param $_string提交的数据
 * @return $_string 经过验证的数据
 */
function _check_title($_string){
	
	if(empty($_string)){
		_alert_back("请选择title");
	}else{
		return _mysql_string($_string);
	}
}
/*
 * _check_data 检查phone,adress是否合法
 * access public
 * @param $_string提交的数据
 * @return $_string 经过验证的数据
 */
function _check_data($_string){
	$_string=trim($_string);
	
	if(empty($_string)){
		return null;
	}else{
		return _mysql_string($_string);
	}
}

