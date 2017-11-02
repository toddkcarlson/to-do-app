 function onReady() {
   const addToDoForm = document.getElementById('addToDoForm');
   const newToDoText = document.getElementById('newToDoText');
   const toDoList = document.getElementById('toDoList');
   
   addToDoForm.addEventListener('submit', event => {
     event.preventDefault();

     // get the text
     let title = newToDoText.value;

     // create a new li
     let newLi = document.createElement('li');

     // create a new input
     let checkbox = document.createElement('input');

     // set the input's type to checkbox
     checkbox.type = "checkbox";

     // set the title
     newLi.textContent = title;

     // attach the checkbox to the li
     newLi.appendChild(checkbox);
        
     // attach the li to the ul
     toDoList.appendChild(newLi);

     //empty the input
     newToDoText.value = '';     
    
     var deleteButton = document.getElementsByTagName("button")[1];   
      deleteButton.addEventListener("click", function() {
        console.log("works");
        var inputElems = document.querySelectorAll("input");

        for (var i = 0; i < inputElems.length; i += 1) {

            if (inputElems[i].checked) {
                console.log(inputElems[i]);
                inputElems[i].parentNode.remove();      
            }   
        }
     }); 
   });   
     
 
 }

 window.onload = function() {
   alert("The window has loaded!");
   onReady();
 };