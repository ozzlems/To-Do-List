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
 })





})
