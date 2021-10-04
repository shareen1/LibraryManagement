function processData(data1) {
        var data = data1.split(/\r\n|\n/);

        	var table = "<table class='table'>";
        	table+="<th> ISBN</th>";
        	table+="<th>Title</th>";
        	table+="<th>Author</th>";
        	table+="<th>Publication Date.</th>";
        	table+="<th>Copies</th>";
        	table+="<th>Available</th>";
        	table+="<th>Action</th>";
	for(i=0;i<data.length;i++){
		table+= "<tr>";
		var row = data[i];
		var cells = row.split(",");
		 
		for(j=0;j<cells.length;j++){
			table+= "<td>";
			table+= cells[j];
			table+= "</th>";
		}
		table+= "<td>";
		var buttongrp="<button id = 'movieAdded' type='button' style='display:inline-block'>  <img src='img/add.png' width='25' height='25' style='float:left;margin-right:0.5em'>Add Stock</button>"
			buttongrp+= "<button id = 'movieAdded' type='button' style='display:inline-block'>  <img src='img/borrow.jpg' width='25' height='25' style='float:left;margin-right:0.5em'>Borrow</button>"
			buttongrp+= "<button id = 'movieAdded' type='button' style='display:inline-block'>  <img src='img/return.png' width='25' height='25' style='float:left;margin-right:0.5em'>Return</button>"
		  
		table+= buttongrp;
		table+= "</th>";
	}
	table+= "</table>";
	$("#file-parsed").html(table);
    }