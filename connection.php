<?php
 $username = "root";
 $password = "";
 $server = 'localhost';
 $db = "formdata";

 $con = mysqli_connect($server, $username, $password, $db);
 if($con){
	 echo "";
 }else{
	 echo "No connection";
 }
?>