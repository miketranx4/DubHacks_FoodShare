function submitReview() {
	var userinput = document.getElementById('review-input').value;
	var para = document.createElement("text");
	var node = document.createTextNode(userinput);
	para.appendChild(node);

	var element = document.getElementById('form');
	var child = document.getElementById('comments');
	element.insertBefore(para, child);
	//alert(userinput);
}