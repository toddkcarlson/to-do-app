 function onReady() {
   const toDos = [];
   const addToDoForm = document.getElementById('addToDoForm');
   const deleteButton = document.getElementsByTagName("button")[1];

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