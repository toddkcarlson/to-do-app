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
     button.class = "delete";
     
     // attach the checkbox to the li
     newLi.appendChild(button);         

     // attach the li to the ul
     toDoList.appendChild(newLi);

     //empty the input
     newToDoText.value = '';

    document.getElementByClassName('delete').onclick = function() {
        var x = document.getElementByID("toDoList");
        x.remove(x.selectedIndex);	
    };

   });  
 }

 function onReady() {
   const toDos = [];
   const addToDoForm = document.getElementById('addToDoForm');

  function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');
    if (!newToDoText) { return }
    	
    toDos.push({
      title: newToDoText.value,
      complete: false
    });

    newToDoText.value = '';    

    renderTheUI(toDos);    
  }

  function renderTheUI(toDos) {
   const todoList = document.getElementById('toDoList');
   
   toDoList.textContent = '';

   toDos.forEach(function(toDo) {
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = "checkbox";

      newLi.textContent = toDo.title;

      todoList.appendChild(newLi);
      newLi.appendChild(checkbox);           
   });   
  }

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
  });
 }

 window.onload = function() {
//   alert("The window has loaded!");
   onReady();
 };