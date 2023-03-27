window.addEventListener('load', () => {
    todos = JSON.parse(localStorage.getItem('todos')) || [];   
     const nameInput = document.querySelector('#name');
     const todoList = document.querySelector('#todo-list');
     const newTodoForm = document.querySelector('#new-todo-form');

     const username = localStorage.getItem('username') || '';      //yazılan ismi kaydeder 
     nameInput.value = username;

     nameInput.addEventListener('change' , e => {           //değiştirilen input ismi kaydeder
        localStorage.setItem('username' , e.target.value);
     })
     
     newTodoForm.addEventListener('submit', e => {
        e.preventDefault();
        
        const todo = {
         content: e.target.elements.content.value,
         done: false,
         createdAt: new Date().getTime()
        }
   todos.push(todo);

   localStorage.setItem('todos' , JSON.stringify(todos));
   e.target.reset();

   // create function for display todo inputs
   DisplayTodos();
})
DisplayTodos(); // we can also call it to display as soon as when the page is loadec
})

function DisplayTodos(){  // func for todo list elements where we push our new todos 
 const todoList = document.querySelector('#todo-list');   
 todoList.innerHTML = ""; // everytime we call display we re gonna clear all of the elements 

 todos.forEach(todo => {
    const todoItem = document.createElement('div'); // Her bir "todo" için yeni bir div öğesi oluşturulur.
    todoItem.classList.add('todo-item')   //// "todo-item" sınıfı, oluşturulan div öğesine eklenir.

    const label = document.createElement('label');
    const input = document.createElement('input');
    const span = document.createElement('span');
    const content = document.createElement('div');
    const actions = document.createElement('div');
    const edit = document.createElement('button');
    const deleteButton = document.createElement('button');

  input.type = 'checkbox'; // thats what we look that for is done or not done  
  input.checked = todo.done; //this will tell if its done or not done
 span.classList.add('bubble');

 content.classList.add('todo-content');
 actions.classList.add('actions');
 edit.classList.add('edit');
 deleteButton.classList.add('delete');

 content.innerHTML= `<input type= "text" value="${todo.content}" readonly>`;
 edit.innerHTML = 'Edit';
 deleteButton.innerHTML = 'Delete';

 label.appendChild(input);
 label.appendChild(span);
 actions.appendChild(edit);
 actions.appendChild(deleteButton);
 todoItem.appendChild(label);
 todoItem.appendChild(content);
 todoItem.appendChild(actions);

 todoList.appendChild(todoItem);

 if(todo.done){
    todoItem.classList.add('done'); 
 }
 input.addEventListener('click' , e => {
    todo.done = e.target.checked;
    localStorage.setItem('todos' , JSON.stringify(todos));

 })
})
}