<?php
	include("dbcon.php");
	 
	$ID=$_POST["title"];

	$ID = $conn->real_escape_string($ID);
	$sql = "SELECT * FROM employee_inf where EmployeeNumber='$ID'";
	$result = $conn->query($sql);

	if ($result->num_rows > 0) 
	{
	    $row = $result->fetch_assoc();
	    $arr = array('EmployeeNumber' => $row["EmployeeNumber"],
	    'Firstname' => $row["Firstname"],
	    'Lastname' => $row["Lastname"], 
	    'Position' => $row["Position"], 
	    'Salary' => $row["Salary" ] , 
        'hello' => "hello",
        'HireDate' => $row["HireDate"]);
	    echo json_encode($arr);

	}
	else 
	{
	    echo json_encode( array(null));
	}
	$conn->close(); 