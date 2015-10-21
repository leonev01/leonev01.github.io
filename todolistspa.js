<html>
<body>
<script type="text/javascript">
  add = function () {
    var list =document.querySelector("#box").innerHTML = document.querySelector("#textbox".value);
  }
 
  level= document.querySelector("#level")
  box= document.querySelector("#textbox")
  ul= document.querSelecotr("#box")
   li= document.createElement("li")
      li.classList.add(level.value)
   input= document.createElement("INPUT")
      input.type("checkbox")
   text= document.createTextNode(box.value)
      ul.appendChild(li)
      li.appendChild(input)
      li.appendChild(text)
</script>
<script type="text/javascript" src="http://bnmnetp.github.io/cs130/listsaver.js"></script>
</body>
</html>
