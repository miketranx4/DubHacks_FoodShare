
function submitReview() {
	var userinput = document.getElementById('review-input').value;

	var para = document.createElement("div"); //creates a div
	var node = document.createElement("p"); //creates a paragraph node for reply
	var reply = document.createTextNode(userinput); //creates a reply 
	node.appendChild(reply);
	para.className = "row";
	

	var innerPara = document.createElement("div");
	innerPara.className = "col-md-12"
	para.appendChild(innerPara);
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
	var name = document.createTextNode("Kyle");
	innerPara.appendChild(name);

	innerPara.appendChild(node);                       //appends the text to the div

	var line = document.createElement("hr");

	innerPara.appendChild(line);



	var element = document.getElementById('form');
	var child = document.getElementById('comments');
	element.insertBefore(para, child);
	//alert(userinput);
}