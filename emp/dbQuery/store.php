<?php 
include("dbcon.php"); 

   // create a variable
    /*
        Fetch Variable/ Inputs
    */
    $first_name=$_POST['firstname'];
    $last_name=$_POST['lastname'];
    $salary=$_POST['salary'];
    $position=$_POST['position'];
    $emp_number=$_POST['EmployeeNumber'];
    $hireDateMonth=$_POST['month'];
    $hireDateDay=$_POST['date'];
    $hireDateYear=$_POST['year1'];
    $file = "logs";

    /*
        remove unnecessary characters
        Anti SQL Injection
    */

    $emp_number = $conn->real_escape_string($emp_number);
    $first_name = $conn->real_escape_string($first_name);
    $last_name = $conn->real_escape_string($last_name);
    $salary = $conn->real_escape_string($salary);
    $position = $conn->real_escape_string($position);
    
    /*
    *
    *   Check if Firstname and lastname is SET
    *
    */
    if( isset( $first_name , $last_name , $salary , $position , $emp_number  )  )
    {
        $initial_qry = "SELECT * FROM employee_inf where EmployeeNumber='$emp_number'";
        $check = $conn->query($initial_qry);
        
        /*
            Check if there is a duplicate employee number
        */
        if( $check->num_rows > 0 )
        {
            
            $error_flag =  "" . date("Y-m-d h:i:sa") . ":duplicate ID of :". $emp_number . "\n";
            file_put_contents( $file, $error_flag, FILE_APPEND );
            echo "<h1><center>DUPLICATE ID!</center></h1>";
            header( "Refresh:5; url=/emp/View/AddEmployee.html", true, 303);
            die();          
        }
        else 
        {
            /*
                Add/ INSERT  query
            */
            $date=date_create($hireDateYear ."-". $hireDateMonth . "-" . $hireDateDay);
            $dateF = $date->format('d/m/Y');
            $dateF2 = $hireDateYear . $hireDateMonth . $hireDateDay;
            $qry = "INSERT INTO employee_inf ( EmployeeNumber ,Firstname, Lastname, Position, Salary, HireDate)
                    VALUES ( '$emp_number' , '$first_name','$last_name','$position','$salary', '$dateF2')";
            
            $conn->query($qry);
            /*
                Successful query
            */
            if($conn->affected_rows > 0)
            {
                // Check connection error
                if ($conn->connect_error)
                {
                     die("Connection failed: " . $conn->connect_error);
                }
                $error_flag = "" . date("Y-m-d h:i:sa") .":Success Insert at employee: ". $emp_number ."\n";
                file_put_contents( $file, $error_flag, FILE_APPEND );
                $conn->close();                
                header( 'location: /emp/index.html' );
            }
            else 
            {
                echo "Employee NOT Added<br />";
                header( "Refresh:5; url=http://emp/View/AddEmployee.html", true, 303);
                echo mysqli_error ($conn);
            }
        }
    
    }
    else 
    {
        echo "Employee NOT Added<br />";        
        $conn->close();
        $error_flag = "" . date("Y-m-d h:i:sa") . "Missing Information!";
        file_put_contents( $file, $error_flag, FILE_APPEND );
        header( "Refresh:5; url=http://emp/View/AddEmployee.html", true, 303);
        die();
    }
        
