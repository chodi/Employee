$(document).ready(function()
{
    var ID = "";
    /*
        Ajax function to get data from database to textarea
    */
    function search()
    { 
      	var title=$("#inputSearch").val();
        document.getElementById("employee-inf").value = "";
      	if(title!="")
      	{
        	$.ajax(
        	{
                type:"post",
                url:"/emp/dbQuery/SearchEmployeeRequest.php",
                data:"title=" + title,
                success:function(data)
                {
                    var emp = document.getElementById("employee-inf");
                    if( data != "[null]" )
                    {    
                    	var employee = JSON.parse(data);
                    	ID = employee.EmployeeNumber;                	
                    	emp.value = employeeParser(employee);
                        $('#deleteEmployee').prop('disabled', false);
                        $("#deleteEmployee").addClass("btn-success");  
                    }
                    else
                    {
                        emp.value = "0 Records found!";
                        ID = "";
                        $('#deleteEmployee').prop('disabled', true);
                        if($("#deleteEmployee").hasClass("btn-success"))
                        {
                            $("#deleteEmployee").removeClass("btn-success"); 
                        }   
                        
                    }
                }
            });
        } 
    }

    /*
    *
    *    Format data from database
    *    This function is for DELETE.PHP
    */
    function employeeParser(obj)
    {
    	var result = "Employee Number: " + obj.EmployeeNumber +
    	"\nFirstname: " + obj.Firstname +
    	"\nLastname: " + obj.Lastname +
    	"\nSalary: " + obj.Salary +
    	"\nPosition: " + obj.Position + 
        "\nHire Date(YYY-MM-DD): " + obj.HireDate ;
    	return result;
    }

    /*
    *
    *   ONCLICK catch of search button of DELETE.HTML
    *
    *
    */
    $('#inputSearch').keyup(function(e)
    {                	
        if(e.keyCode == 13) 
        {
        	search();
        }
    });
    $("#search-btn").click(function()
    {
        search();
    });
    
    /*
    *
    *    On Button Click Delete Function
    *
    */
    $("#deleteEmployee").click(function()
    {
        if( ID != "")
        {
            ajaxDelete( ID );
        }
        else
        {
            alert("FAIL");
        }
    });
    
    /*
    *
    *    Delete Function
    *
    */
    function ajaxDelete( ID )
    { 
      	employee_id=ID;
        document.getElementById("employee-inf").value = "";
      	if(title != "")
      	{
        	$.ajax(
        	{
                type:"post",
                url:"/emp/dbQuery/DeleteEmployee.php",
                data:"id=" + employee_id,
                success:function(data)
                {
                    var emp = document.getElementById("employee-inf");
                }
            });
        } 
    }


   
});       



