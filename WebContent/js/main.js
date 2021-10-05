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
function buildtable(button, type) {
	var isdn = button.parentNode.parentNode.firstElementChild.innerText;
	var tabletext = button.parentNode.parentNode.parentNode.innerText
			.replaceAll("Borrow\n", "").replaceAll("\t\nAdd Stock\n", "")
			.replaceAll("Return", "").split("\n")
	var flag = false;
	var data = "";
	var index = 0;
	for (j = 1; j < tabletext.length; j++) {
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
					var available = parseInt(celltext[i]) + 1;
					
				}
				celltext[i] = available;
				data += celltext[i];
			} else {
				if (flag == true && type == 'AS' && i==4) {
					celltext[i] = parseInt(celltext[i]) + 1;	
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

	var table = "<table class='table'>";
	table += "<th> ISBN</th>";
	table += "<th>Title</th>";
	table += "<th>Author</th>";
	table += "<th>Publication Date.</th>";
	table += "<th>Copies</th>";
	table += "<th>Available</th>";
	table += "<th>Action</th>";
	for (i = 0; i < data.length; i++) {
		table += "<tr>";
		var row = data[i];
		var cells = row.split(",");

		for (j = 0; j < cells.length; j++) {
			table += "<td>";
			table += cells[j];
			table += "</th>";
		}
		table += "<td>";
		var buttongrp = "<button id = 'movieAdded' type='button' style='display:inline-block' onclick=AddStock(this)>  <img src='img/add.png' width='25' height='25' style='float:left;margin-right:0.5em'>Add Stock</button>"
		buttongrp += "<button id = 'movieAdded' type='button' style='display:inline-block' onclick=borrow(this)>  <img src='img/borrow.jpg' width='25' height='25' style='float:left;margin-right:0.5em'>Borrow</button>"
		buttongrp += "<button id = 'movieAdded' type='button' style='display:inline-block' onclick=returnBook(this)>  <img src='img/return.png' width='25' height='25' style='float:left;margin-right:0.5em'>Return</button>"

		table += buttongrp;
		table += "</th>";
	}
	table += "</table>";
	$("#file-parsed").html(table);
}