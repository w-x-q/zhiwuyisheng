
<?php
     header("Content-type:text/html;charset=utf-8");
    //1、接收前端的数据

	$userId = $_POST["username"];
	$userPass = $_POST["userpass"];

    //2、处理
     //1)、链接数据库(搭桥)
    
	 $conn = mysql_connect("localhost","root","root");
    if(!$conn){
        echo("数据库出错".mysql_error());
    }else{
        //2)、选择库（选择目的地）
        mysql_select_db("zwys",$conn);

        //3)、执行SQL语句（数据传输）
		//3.1)
		$sqlStr="select * from user where userId='".$userId."' and pass='".$userPass."'"; 
		$result = mysql_query($sqlStr);
		$rows = mysql_num_rows($result);
		mysql_close($conn);
		if($rows>0){
            echo "1";
        }else{
            echo "0";
        }
    }
?>