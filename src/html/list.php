<?php
	//初始化连接对象方法
    function connect(){
        $servername = "localhost";//
        $username = "root";
        $password = "root";
        $dbname = 'goods'; 
        //初始化连接，返回一个连接对象(包含所连接数据库的信息)
        $con = mysqli_connect($servername,$username,$password,$dbname); 

        //获取连接对象的错误信息
        if (mysqli_connect_error($con)) 
        { 
            echo "连接 MySQL 失败: " . mysqli_connect_error();
            return null;
        }
        return $con;
    }
    
    //执行查询数据方法
    function query($sql){
        //初始化连接
        $conn = connect();
        //执行 sql 脚本，也叫数据库脚本，返回一个结果集（对象）
        $result = mysqli_query($conn,$sql);
        //定义了一个数组
        $jsonData = array();           
        if ($result)
        {
            
            //在结果集中获取对象(逐行获取)
            while ($obj = mysqli_fetch_object($result))
            {
                //$jsonData.push($obj)
                $jsonData[] = $obj;
                // print_r($obj->email);
            }   
            //将对象转换成 json 格式的字符并打印出来
            //JSON.stringify()            
            // if(!$isCheck){
                // echo json_encode($jsonData, JSON_UNESCAPED_UNICODE);
            // }
            // 释放结果集
            mysqli_free_result($result);
        } 
        //关闭连接
        mysqli_close($conn);   
        return $jsonData;
    }

    $page =(int)$_POST["page"];
    $pageNum = ($page-1)*40;
    $sql = "select * from goodsdatalist limit  $pageNum,40";
    $result = query($sql);
    echo json_encode($result,JSON_UNESCAPED_UNICODE);
?>