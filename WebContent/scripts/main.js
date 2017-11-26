/**
 * 
 */
function addTable() {
	
	var matrix;
	var rows;
	var headers;
	var rowsNumber = 0;
    var columnsNumber = 0;

    //Read domain explicit csv file
	d3.csv("inputFiles/domain-explicit-communication-1.csv", function(d) {
	  //Create general matrix
	  rowsNumber = d.length; //Header does not count
	  columnsNumber = d3.keys(d[0]).length + 9 - 1; //Bug: It is counting one column more, check file
	  headers = d3.keys(d[0]);
	  
	  matrix = new Array (rowsNumber);
	  for (i=0; i<rowsNumber; i++)
		  matrix[i]= new Array(columnsNumber);
	  
	  //Init matrix
	  for (var i=0; i<rowsNumber; i++){
		  for (var j=0; j<columnsNumber; j++){
			  matrix[i][j]="0";
		  }
	   }
	  
	  /**Test**/
	  console.log("RowsNumber="+rowsNumber+" ColumnsNumber="+columnsNumber);
	  console.log(d3.keys(d[0]));
	  /********/
	  
	  readDomainExplicitData(d);
	  d3.csv("inputFiles/domain-implicit-communication-1.csv", function(d) {
		  readDomainImplicitData(d);
	  });
	  
	  
	  /*d3.csv("inputFiles/domain-permission-granted-1.csv", function(d) {
		  readDomainPermissionGranted(d);
	  });*/
	  
	});

	function readDomainExplicitData(d) {
	    var iterator = 0;
		d.forEach(function (d){
			matrix[iterator][0]=d.Package;
			matrix[iterator][1]=d.Component;
			matrix[iterator][2]=d.ID;
			if (String(d[0]) == "1"){ matrix[iterator][3]=String(d[0]);}
			if (String(d[1]) == "1"){matrix[iterator][4]=String(d[1]);}
			if (String(d[2]) == "1"){matrix[iterator][5]=String(d[2]);}
			if (String(d[3]) == "1"){matrix[iterator][6]=String(d[3]);}
			if (String(d[4]) == "1"){matrix[iterator][7]=String(d[4]);}
			if (String(d[5]) == "1"){matrix[iterator][8]=String(d[5]);}
			iterator++;
		});
		
	    /**Test*/
	    console.log( matrix.join('\n') );
	    /*******/
	}
	
	function readDomainImplicitData(d){
	    var iterator = 0;
		d.forEach(function (d){
			if (String(d[0]) == "1"){matrix[iterator][3]=String(d[0]);}
			if (String(d[1]) == "1"){matrix[iterator][4]=String(d[1]);}
			if (String(d[2]) == "1"){matrix[iterator][5]=String(d[2]);}
			if (String(d[3]) == "1"){matrix[iterator][6]=String(d[3]);}
			if (String(d[4]) == "1"){matrix[iterator][7]=String(d[4]);}
			if (String(d[5]) == "1"){matrix[iterator][8]=String(d[5]);}
			iterator++;
		});
		
	    /**Test*/
	    console.log( matrix.join('\n') );
	    /*******/
	    printVisualization(matrix);
	}
	
	//Pendig: This method is not working properly
	/*function readDomainPermissionGranted(d){
	    var iterator = 0;
	    console.log(d3.keys(d[0]));
		d.forEach(function (d){
			if (String(d[3]) == "1"){matrix[iterator][9]=String(d[3]);}
			if (String(d[4]) == "1"){matrix[iterator][10]=String(d[4]);}
			if (String(d[5]) == "1"){matrix[iterator][11]=String(d[5]);}
			iterator++;
		});
		
	    //console.log( matrix.join('\n') );
	    
	}*/
	
    /**
     * TO DO: Change this HTML format for a matrix d3 visualization
     * */	
	function printVisualization(matrix){
		console.log("Printing...");
	    //Print complete matrix as a HTML Table 
	    var myTableDiv = document.getElementById("myDynamicTable");
	     
	    var table = document.createElement('TABLE');
	    table.border='1';
	   
	    var tableBody = document.createElement('TBODY');
	    table.appendChild(tableBody);
	     
	    for (var i=0; i<rowsNumber; i++){
	       var tr = document.createElement('TR');
	       tableBody.appendChild(tr);
	      
	       //Add domain implicit data
	       for (var j=0; j<columnsNumber; j++){
	           var td = document.createElement('TD');
	           td.width='75';
	           //td.appendChild(document.createTextNode("Cell " + i + "," + j));
	           //td.appendChild(document.createTextNode(implicitDomain[i][j])); //array
	           td.appendChild(document.createTextNode(matrix[i][j]));
	           tr.appendChild(td);
	       }
	    }
	    myTableDiv.appendChild(table);	
	}
}

function load() {
   
    console.log("Page load finished");

}