<?php
	include 'DBHelper.php';
	include 'format.php';

	//判断当前 username 是否已存在数据表中
	$usernameCheck = format("select * from checkregister where username='{0}'", $_POST["username"]);
	$result = query($usernameCheck);
	//当前 username 不存在，执行插入操作
	if(count($result) < 1){
		$sql = format("insert into checkregister(username, password, telphone) values('{0}', '{1}', '{2}')", $_POST["username"], $_POST["password"], $_POST["telphone"]);
		// echo $sql;
		$excute = excute($sql);
		if($excute){
			echo "{state: true}";
		} else {
			echo "{state: false, message: '插入失败！！！'}";
		}
	} else {
		echo "{state: false, message: 'username 已被注册！！！'}";
	}
?>