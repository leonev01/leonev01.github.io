<html>
<body>
<script type="text/javascript">
  done = function() {
    if (this.checked) {
      this.parentNode.classList.add("done");
    }else{
     this.parentNode.classList.remove("done"); 
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
</script>
<script type="text/javascript" src="http://bnmnetp.github.io/cs130/listsaver.js"></script>
</body>
</html>
