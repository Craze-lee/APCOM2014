<?php
//连接数据库
define('DB_HOST','localhost');
define('DB_USER','root');
define('DB_PWD','liyong');
define('DB_NAME','apcom');
//建立数据库连接
$_conn = mysql_connect(DB_HOST,DB_USER,DB_PWD) or die('数据库连接失败');
//选择数据库
mysql_select_db(DB_NAME) or die('指定的数据库不存在');
//选择字符集
mysql_query('SET NAMES UTF8') or die('字符集错误');
 

?>

