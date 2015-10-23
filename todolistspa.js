<script type="text/javascript">
done = function() {
	if (this.checked){
	this.parentNode.classList.add("done");
	}else {
		this.parentNode.classList.remove("done");
		}
	localSave()
}
localSave = function() {
	var res = []
	var text;
	entries = document.querySelectorAll('li')
	for(text=0; text < entries.length; text++) {
		if (! entries[text].classList.contains("done")) {
		res.push(entries[text].innerText);
		}
	}
	localStorage.setItem("todoDatabase",JSON.stringify(res))
}
restore = function () {
	entries = JSON.parse(localStorage.getItem('todoDatabase'))
	for (text=0; text < entries.length; text++){
	
	ul = document.querySelector("#box");
	li = document.createElement('li');
	input= document.createElement("input");
	input.type = 'checkbox';
	input.onclick = done;	
	li.appendChild(input);
	task= document.createTextNode(entries[text]);
	li.appendChild(task);
	ul.appendChild(li);
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
	
	
localSave ()
	
}
window.onload = restore;
</script>



