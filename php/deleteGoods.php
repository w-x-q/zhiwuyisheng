<?php
	header("Content-Type:text/html;charset=utf-8");
	//1、接受客户端的数据（用户输入的数据）
	$vipName   = $_POST['vipName'];
	$goodsId   = $_POST['goodsId'];
	
	//2、数据保存在数据库中
	//1）、建立连接（搭桥）
	$conn = mysql_connect("localhost","root","root");
	
	//2）、选择数据库（找目的地）
	if(!mysql_select_db("zwys",$conn)){
		die("数据库选择失败".mysql_error());
	}
	
	//3）、传输数据（过桥）
	$sqlstr = "delete from  shoppingCart where vipName='".$vipName."' and goodsId='".$goodsId."'";
	$result=mysql_query($sqlstr,$conn);	
	$num = mysql_affected_rows();
   
	if(!$result){
		die("删除SQL语句执行失败".mysql_error());
		echo 0; //1：表示删除成功，0：表示删除失败。
	}	
	//4）、关闭连接（拆桥）
	mysql_close($conn);
	
	//3、给客户端返回（响应）！
	
	if(!$result){
		
	}else{
		echo 1;
	}
	
	
?>