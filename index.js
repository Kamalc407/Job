		
//   //crete an array of dummy data 
  let players = [
  	p1={
  		name: " John Sawyer",
  		KD: 1.2,
  		rank: " Bronze "
  	},
  	p2={
  		name: " Jane Doe",
  		KD: 15.6,
  		rank: " Gold "
  	},
  	p3={
  		name: " Philip Owens",
  		KD: 7,
  		rank: " Diamond "
  	},
  	p4={
  		name: " Harry Potter ",
  		KD: 8,
  		rank: " Silver "
  	},
  	p5={
  		name: " Perry Jackson",
  		KD: .004,
  		rank: " Champion"
  	}
  ];


  // sort the table by higest KD 
  // align format the table 
  // place table headers
  // animate swapping
  // figure out how to place records from a query into thier own objects

  

window.onload = function(){
   //create the table
   generateTable();
   console.log(players[0].KD);
   // sort the array of Objects by highes KD 
   //generate table from that sorted object

};




let  generateTable = ()=>{
    // get the reference for the body
  var body = document.getElementsByTagName("body")[0];

  // creates a <table> element and a <tbody> element
  var tbl = document.createElement("table");
  var tblBody = document.createElement("tbody");

  // creating all cells
  for (var i = 0; i < players.length; i++) {
    // creates a table row
    var row = document.createElement("tr");

      var cell = document.createElement("td");
      for (const prop in players[i]) {
      var cellText = document.createTextNode(players[i][prop]); // p1.name , p1.kd , p1.rank
      cell.appendChild(cellText);
     // console.log(`${property}: ${object[property]}`);
      row.appendChild(cell);
    }
    // add the row to the end of the table body
    tblBody.appendChild(row);
  }

  // put the <tbody> in the <table>
  tbl.appendChild(tblBody);
  // appends <table> into <body>
  body.appendChild(tbl);
  // sets the border attribute of tbl to 2;
  tbl.setAttribute("border", "2");
// }
}


