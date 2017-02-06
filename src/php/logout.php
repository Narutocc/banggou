<?php
	session_start();
	
	if(isset($_SESSION['login_username'])){
		unset($_SESSION['login_username']);
		//header("Location: index.html");
	}
?>