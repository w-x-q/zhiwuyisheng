<?php
    header("content-type","text/html;charset=utf-8");
	$username = $_POST['username'];
    $userpass = $_POST['userpass'];
    $email= $_POST['email'];
    $birthday= $_POST['birthday'];
	
	
	//1、建立连接并选择数据库
	$conn = mysql_connect("localhost","root","root");
	if(!$conn){
		die("连接失败".mysql_error());
	}else{
		mysql_select_db("zwys",$conn);//链接数据库
		$sqlstr="select * from user where userId='$username'";//查询该用户名在数据库中有没有。 
		$result = mysql_query($sqlstr);
		$rows = mysql_num_rows($result);
		if($rows>0){
            //4)、关闭数据库
            mysql_close($conn);
            echo "-1";//用户名被使用
        }else{
            $sqlStr = "insert into user(userId,pass,email,birday)values('$username','$userpass','$email','$birthday')";
            $tesult = mysql_query( $sqlStr,$conn);
            mysql_close($conn);
            if($tesult!=1){
                echo "0";//注册失败用0
            }else{
                echo "1";//注册成功用1
            }
        }
	}

?>