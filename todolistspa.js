done = function() {
	if (this.checked){
	this.parentNode.classList.add("done");
	}else {
		this.parentNode.classList.remove("done");
		}
	localSave('box')
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
	
localSave ('box')
restoreList("box",done)
	
}






