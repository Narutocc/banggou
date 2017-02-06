<?php
       	session_start();

       	if(isset($_SESSION['login_username'])){
       	       $res = "'".(string)$_SESSION['login_username']."'";
       		 echo "{'state':true,'clientName':".$res."}";
       	}else {
       		echo "{'state':false}";
       		exit;
       	}
?>
