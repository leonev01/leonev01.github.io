<html>
<body>
<script type="text/javascript" src="http://bnmnetp.github.io/cs130/listsaver.js"></script>
<script type="text/javascript">
done = function() {
	if (this.checked){
	this.parentNode.classList.add("done");
	}else {
		this.parentNode.classList.remove("done");
		}
}
add= function() {
	var newli;
	text = document.querySelector("#textbox");
	ul = document.querySelector("#box");
	level= document.querySelector("#level").value;
	word = text.value;
	li = document.createElement('li');
	li.className = level;
	input= document.createElement("input");
	input.type = 'checkbox';
	input.onclick = done;	
	li.appendChild(input);
	task= document.createTextNode(word);
	li.appendChild(task);
	ul.appendChild(li);
	
	
	
}
</script>

</body>
</html>
