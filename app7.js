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

      // create a new input
     let button = document.createElement('input');

     // set the input's type to button
     button.type = "button";

     // set the input's value to button
     button.value = "Delete";

     // set the input's value to button
     button.id = "delete";
     
     // attach the checkbox to the li
     newLi.appendChild(button);         

     // attach the li to the ul
     toDoList.appendChild(newLi);

     //empty the input
     newToDoText.value = '';

     document.getElementById("delete").addEventListener("click", myDelete);

     function myDelete() {
        this.parentElement.remove(); 
     }    
     
//    document.getElementByID("delete").onclick = function() {
//     this.parentElement.remove();        
//    };
     
   });  
 }

 window.onload = function() {
//   alert("The window has loaded!");
   onReady();
 };