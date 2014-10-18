
function submitReview() {
	var outerDiv = document.createElement("div");
	outerDiv.className = "comments";


	var userinput = document.getElementById('review-input').value;
	document.getElementById('review-input').value = " ";
	var para = document.createElement("div"); //creates a div
	var node = document.createElement("p"); //creates a paragraph node for reply
	var innerPara = document.createElement("div"); //creates a col-md div
	var time = document.createElement("span");     //creates a time span 
	var line = document.createElement("hr");	   //creates a horizontal line 


	var reply = document.createTextNode(userinput); //creates a reply 
	var name = document.createTextNode("Kyle");     //creates a new username
	var timeVal = document.createTextNode("just now"); 


	time.className = "pull-right";
	node.appendChild(reply);
	para.className = "row";
	innerPara.className = "col-md-12";

	outerDiv.appendChild(para);
	para.appendChild(innerPara);   //adds col-md div to row div
	var i;
	var star;
	var space;
	for (i = 0; i < 5; i++) {
		space = document.createTextNode(" ");
		star = document.createElement("span");
		star.className = "glyphicon glyphicon-star";
		innerPara.appendChild(star);
		innerPara.appendChild(space);

	}
	
	innerPara.appendChild(name);						//adds username 
	innerPara.appendChild(time);						//adds date span
	time.appendChild(timeVal);							//adds date text
	innerPara.appendChild(node);                       //adds comment
	innerPara.appendChild(line);



	var element = document.getElementById('form');
	var child = document.getElementById('comments');
	element.insertBefore(outerDiv, form.childNodes[6]);   //para=row child=comments    adds the full template before the comments
	//alert(userinput);
}