$(document).ready(function()
{
    // ONCLICK function of search button of SEARCH.HTML
    function search()
    { 
      var title=$("#inputSearch").val();

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
                    var result_set = employeeParser(result);
                    $("#employee-inf").val(result_set);
                }
                else
                {
                    $("#employee-inf").val("0 Record found!!!");
                }
                $("#inputSearch").val(title);
             }
          });
      }
    }
    
    /*
    *
    *    Format data from database
    *   This function is for DELETE.PHP
    *
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
    *   ONCLICK catch of search button of SEARCH.HTML
    *
    */
    $("#search-btn").click(function()
    {
        search();
    });

    $('#inputSearch').keyup(function(e)
    {
        if(e.keyCode == 13)
        {
           search();
        }
    });
});       



			