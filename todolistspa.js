<html>
<body>
<script type="text/javascript">
  done = function() {
    if (this.checked) {
      this.parentNode.classList.add("done");
    }else{
     this.parentNode.classList.remove("done"); 
    }
    localsave()
  }
  localSave = function() {
	var res = []
	var textbox;
	allEntries = document.querySelectorAll('li')
	for(textbox=0; textbox < allEntries.length; textbox++) {
		if (! allEntries[textbox].classList.contains("done")) {
		res.push(allEntries[textbox].innerText);
		}
	}
	localStorage.setItem("todoDatabase",JSON.stringify(res))
}
restoreTask = function () {
	allEntries = JSON.parse(localStorage.getItem('todoDatabase'))
	for (textbox=0; textbox < allEntries.length; textbox++){
	
	ul = document.querySelector("#box");
	li = document.createElement('li');
	input= document.createElement("input");
	input.type = 'checkbox';
	input.onclick = done;	
	li.appendChild(input);
	text= document.createTextNode(allEntries[textbox]);
	li.appendChild(text);
	ul.appendChild(li);
	}
	
}
  add = function () {
    var list;
  textbox= document.querySelector("#textbox");
  ul= document.querSelecotr("#box");
  level= document.querySelector("#level").value;
  text= textbox.value;
   li= document.createElement('li');
      li.classList.add(level).value;
   input= document.createElement('input');
      input.type("checkbox");
      input.input= done;
   text= document.createTextNode(textbox).value;
      ul.appendChild(li);
      li.appendChild(input);
      li.appendChild(text);
      
    localsave()
  }
  window.onload:restoreTask;
</script>

</body>
</html>
