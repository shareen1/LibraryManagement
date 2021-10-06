function borrow(button) {
	event.preventDefault();
	buildtable(button, 'B');

}
function returnBook(button) {
	event.preventDefault();
	buildtable(button, 'R');

}
function AddStock(button) {
	event.preventDefault();
	buildtable(button, 'AS');

}
function deleteRow(button) {
	button.parentNode.parentNode.parentNode.deleteRow(button.parentNode.parentNode.rowIndex);
}
function saveRow(button) {
	var text=button.parentNode.parentNode.innerText;
	button.parentNode.parentNode.parentNode.deleteRow(button.parentNode.parentNode.rowIndex);
	var table = document.getElementById("myTable");
	var oldRow = document.getElementById("searchOutput");
	var tt = document.createTextNode("tbody");
	var newRow = document.createElement("tr");
	var isbn=button.parentNode.parentNode.children[0].getElementsByTagName("input")[0].value;
	var title=button.parentNode.parentNode.children[1].getElementsByTagName("input")[0].value
	var auther=button.parentNode.parentNode.children[2].getElementsByTagName("input")[0].value
	var publicationDate=button.parentNode.parentNode.children[3].getElementsByTagName("input")[0].value
	var copies=button.parentNode.parentNode.children[4].getElementsByTagName("input")[0].value
	var available=copies;
	
	newRow.innerHTML ="<tr class='table'>" +
	
	"<td>"+isbn+"</div></td>" +
	"<td> "+title+"</td>" +
	"<td>"+auther+"</td>" +
	"<td>"+publicationDate+"</td>" +
	"<td> "+copies+"</td>" +
	"<td> "+available+ "</td>" +
		"<td><div><input type='number' min='1' max='100' value='1' id='numberlist'><button id = 'movieAdded' type='button' style='display:inline-block' onclick=AddStock(this)>  <img src='img/add.png' width='25' height='25' style='float:left;margin-right:0.5em'>Add Stock</button>"+
	 "<button id = 'movieAdded' type='button' style='display:inline-block' onclick=borrow(this)>  <img src='img/borrow.jpg' width='25' height='25' style='float:left;margin-right:0.5em'>Borrow</button>"+
	 "<button id = 'movieAdded' type='button' style='display:inline-block' onclick=returnBook(this)>  <img src='img/return.png' width='25' height='25' style='float:left;margin-right:0.5em'>Return</button></div></td>"+
	"</tr>";
	oldRow.append(newRow);
	
}
function addNewBook(button) {
	event.preventDefault();
	var table = document.getElementById("myTable");
	var oldRow = document.getElementById("searchOutput");
	var newRow = document.createElement("tr");
	newRow.innerHTML = "<tr id='newRow'>" +
			"<td> <div style='margin-right: 3px;'><input type='text' style='width:100%;' required></div></td>" +
			"<td> <div style='margin-right: 3px;'><input type='text' style='width:100%;'></div></td>" +
			"<td> <div style='margin-right: 3px;'><input type='text' style='width:100%;'></div></td>" +
			"<td> <div style='margin-right: 3px;'><input type='text' style='width:100%;'></div></td>" +
			"<td> <div style='margin-right: 3px;'><input type='number' min='1' max='100' value='1' ></div></td>" +
			"<td> <div style='margin-right: 3px;'>&nbsp;</div></td>" +
			"<td><button id = 'movieAdded' type='button' style='display:inline-block' onclick=saveRow(this)> <img src='img/save.png' width='25' height='25' style='float:left;margin-right:0.5em'></mg>Save</button>" +
			"<button id = 'movieAdded' type='button' style='display:inline-block' onclick=deleteRow(this)> <img src='img/delete.png' width='25' height='25' style='float:left;margin-right:0.5em'></mg>Delete</button> </td>" +

			"</tr>";
	  table.insertBefore(newRow, oldRow);
	
}
function buildtable(button, type) {
	var isdn = button.parentNode.parentNode.parentNode.firstElementChild.innerText;
	var tabletext = button.parentNode.parentNode.parentNode.parentNode.innerText
			.replaceAll("Borrow\n", "").replaceAll("\t\nAdd Stock\n", "")
			.replaceAll("Return\n"  , "").replaceAll("Return" ,"").split("\n")
	var flag = false;
	var data = "";
	var index = 0;
	var numberval=button.parentNode.parentNode.firstElementChild.firstElementChild.value;
	for (j = 0; j < tabletext.length; j++) {
		var celltext = tabletext[j].split("\t");

		for (i = 0; i < celltext.length; i++) {
			if (celltext[0] == isdn && i == 0) {
				flag = true;
				data += celltext[i];

			} else if (flag == true && i == 5) {
				if (type == 'B') {
					var available = celltext[i] - 1;
					if (available < 0) {
						alert("The Requested Book " + celltext[1]
								+ "is currently not available to hire");
						data += 0;
						break;
					}

				}
				if (type == 'R') {
					var available = parseInt(celltext[i]) + 1;
					var totalcopy = celltext[4];
					if (totalcopy < available) {
						alert("The Book Return"
								+ celltext[1]
								+ " doesnt belong to library ,please check again");
						data += totalcopy;
						break;
					}
				}
				if (type == 'AS') {
					
					var available = parseInt(celltext[i]) +  parseInt(numberval);
					
				}
				celltext[i] = available;
				data += celltext[i];
			} else {
				if (flag == true && type == 'AS' && i==4) {
					celltext[i] = parseInt(celltext[i]) +  parseInt(numberval);	
				}

				data += celltext[i];

			}
			if (i !== celltext.length - 1) {
				data += ",";
			}

		}
		index = index + 1;
		flag = false;
		if (j !== tabletext.length - 1) {
			data += "\n";
		}
	}

	processData(data);

}
function processData(data1) {
	var data = data1.split(/\r\n|\n/);

	var table = "<table class='table' id='myTable'> <thead>";
	table += "<th> ISBN</th>";
	table += "<th>Title</th>";
	table += "<th>Author</th>";
	table += "<th>Publication Date.</th>";
	table += "<th>Copies</th>";
	table += "<th>Available</th>";
	table += "<th>Action</th> </thead>";
table +="<tbody id='searchOutput'>";
	for (i = 0; i < data.length; i++) {
		table += "<tr>";
		var row = data[i];
		var cells = row.split(",");

		for (j = 0; j < cells.length; j++) {
			table += "<td>";
			table += cells[j];
			table += "</td>";
		}
		table += "<td>";
		var buttongrp =	"<div><input type='number' min='1' max='100' value='1' id='numberlist'><button id = 'movieAdded' type='button' style='display:inline-block' onclick=AddStock(this)>  <img src='img/add.png' width='25' height='25' style='float:left;margin-right:0.5em'>Add Stock</button>";
		buttongrp += "<button id = 'movieAdded' type='button' style='display:inline-block' onclick=borrow(this)>  <img src='img/borrow.jpg' width='25' height='25' style='float:left;margin-right:0.5em'>Borrow</button>";
		buttongrp += "<button id = 'movieAdded' type='button' style='display:inline-block' onclick=returnBook(this)>  <img src='img/return.png' width='25' height='25' style='float:left;margin-right:0.5em'>Return</button></div>";

		table += buttongrp;
		table += "</td>";
	}
	table += "</tbody>";
	table += "</table>";
	$("#file-parsed").html(table);
}