$(document).ready(function()
{
    var ID = "";
    
    /*
    *
    *   SEARCH FUNCTION
    *
    */
    function search()
    { 
      var title=$("#inputEmployeeNumberToSearch").val();

      if(title != "")
      {
         $.ajax({
            type:"post",
            url:"/emp/dbQuery/SearchEmployeeRequest.php",
            data:"title="+title,
            success:function(data)
            {                
                var result = JSON.parse(data);
                
                if(result != "" )
                {
                /*
                *    var result_set = employeeParser(result);
                *    $("#employee-inf").val(result_set);
                */                    
                    ID = result.EmployeeNumber;
                    empNum = result.EmployeeNumber;
                    fname = result.Firstname;
                    lname = result.Lastname;
                    salary = result.Salary;
                    position = result.Position;
                    dateAll = result.HireDate;
                    partsArray = dateAll.split('-');
                    
                    $("#inputEmployeeNumber").val(empNum);
                    $("#inputLastname").val(lname);
                    $("#inputFirstname").val(fname);
                    $("#inputSalary").val(salary);
                    $("#inputPosition").val(position);
                    $("#hireDateYear").val(partsArray[0]);
                    $("#hireDateMonth").val(partsArray[1]);
                    $("#hireDateDate").val(partsArray[2]);
                    
                }
                else
                {
                    var emp = "";
                    alert( title + " Record not found!!!");
                    $("#inputEmployeeNumber").val(emp);
                    $("#inputLastname").val(emp);
                    $("#inputFirstname").val(emp);
                    $("#inputSalary").val(emp);
                    $("#inputPosition").val(emp);
                    $("#hireDateYear").val("1990");
                    $("#hireDateMonth").val("0");
                    $("#hireDateDate").val("0");
                    ID = "";
                }
                //$("#inputSearch").val(title);
             }
          });
      }
    }
    
    function getCurrentValuesToUpdate()
    {
        empNum =        $("#inputEmployeeNumber").val();
        lname =         $("#inputLastname").val();
        fname =         $("#inputFirstname").val();
        salary =        $("#inputSalary").val();
        position =      $("#inputPosition").val();
        hireDateYear =  $("#hireDateYear").val();
        hireDateMonth = $("#hireDateMonth").val();
        hireDateDate =   $("#hireDateDate").val();
        
    }
    
    /*
    *
    *    UPDATE Function
    *
    */
    function ajaxUpdate( ID )
    { 
      	var title=ID;
        getCurrentValuesToUpdate();
        //document.getElementById("employee-inf").value = "";
      	if(title != "")
      	{ 
        	$.ajax(
        	{
                type:"post",
                url:"/emp/dbQuery/UpdateEmployee.php",
                data: { firstname: fname, lastname : lname,
                    salary: salary, position: position, EmployeeNumber : ID,
                    empNew : empNum, year:hireDateYear, month : hireDateMonth, date : hireDateDate},
                success:function(data)
                {
                    //var emp = document.getElementById("employee-inf");
                    clearForm();
                    
        
                    alert("SUCCESSFULLY UPDATED!!!");
                }
            });
            
        } 
    }
 
    /*
    *
    *   ONCLICK catch of search button of UPDATE.HTML
    *
    */
    $("#btnEmployeeNumberToSearch").click(function()
    {
        search();
    });

    $('#inputEmployeeNumberToSearchDUMY').keyup(function(e)
    {
        if(e.keyCode == 13)
        {
           search();
        }
    });
    
    
    
    $("#submitUpdate").click(function()
    {
       ajaxUpdate( ID );
    });
    
    function clearForm()
    {
        var emp = "";        
        $("#inputEmployeeNumberToSearch").val(emp);
        $("#inputEmployeeNumber").val(emp);
        $("#inputLastname").val(emp);
        $("#inputFirstname").val(emp);
        $("#inputSalary").val(emp);
        $("#inputPosition").val(emp);
        $("#hireDateYear").val("1990");
        $("#hireDateMonth").val("0");
        $("#hireDateDate").val("0");
        ID = "";
    }
});