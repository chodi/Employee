<?php
include("dbcon.php");

$sql = "SELECT  EmployeeNumber ,Firstname, Lastname , Position , Salary , HireDate FROM employee_inf";
$result = $conn->query(  $sql ) ;

$result_set = array();
if ( $result->num_rows > 0) 
{
	while($data = mysqli_fetch_assoc($result))
	{	     
	    $result_set[]= $data;	     
	}
	echo json_encode($result_set);
 }
else
{
	echo json_encode( array('record' => null ));
}

$conn->close();
