$(document).ready(function()
{
	$.get("/emp/dbQuery/ViewRequest.php").done(function(data)
	{

		var res = JSON.parse(data);

		var toDisplay = "";
		for (i = 1; i < res.length + 1; i++)
		{
			if( ((i)%2) != 0 )
			{
				toDisplay += "<tr class='warning'>";
			}
			else
			{
				toDisplay += "<tr class='even_row'>";
			}

		toDisplay += "<td>" + res[(i-1)].EmployeeNumber + "</td>";
		toDisplay += "<td>" + res[i-1].Lastname + ", " + res[i-1].Firstname + "</td>";
		toDisplay += "<td>" + res[i-1].Position +"</td>";
		toDisplay += "<td>" + res[i-1].Salary +"</td>"; 
        toDisplay += "<td>" + res[i-1].HireDate +"</td>"; 
		toDisplay += "</tr>";
		}

		$("#view_employee_table").append(toDisplay);

	});

});