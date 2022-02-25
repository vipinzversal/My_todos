var mytodolist=document.getElementsByTagName("LI");
var i;
for(i=0;i<mytodolist.length;i++){
var full=document.createElement("SPAN")
var day= document.createTextNode('X')
full.className='close'
full.appendChild(day);
mytodolist[i].appendChild(full);
}
var close=document.getElementsByClassName('close');
var i;
for(i=0;i<close.length;i++){
    close[i].onclick= function(){
        var div=this.parentElement; 
        div.style.display='none';
    }
}
function newElement()
   {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue); 
    li.appendChild(t);        
    if (inputValue === '') {
     alert("Please write something on new todo list...!");  
 }
 else
 {
 document.getElementById('myul').appendChild(li);
 }
 document.getElementById('myInput').value='';

var full = document.createElement("SPAN");
var day = document.createTextNode("X");
full.className = "close";
full.appendChild(day);
li.appendChild(full);
for (i = 0; i < close.length; i++) {
   close[i].onclick = function() {
     var div = this.parentElement;
       div.style.display = "none";
    }
  }
  }
