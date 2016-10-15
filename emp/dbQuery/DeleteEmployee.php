<?php
	include("dbcon.php");
	 
	$ID=$_POST["id"];

	$ID = $conn->real_escape_string($ID);
	
	
    try 
    {
        $sql = "DELETE FROM employee_inf WHERE EmployeeNumber='$ID'";
        $result = $conn->query($sql);
    } 
    catch (Exception $e)
    {
        echo $e->getMessage();
    }

	
	