window.addEventListener('load', () => {
    todos = JSON.parse(localStorage.getItem('todos')) || [];
     const nameInput = document.querySelector('#name');
     const todoList = document.querySelector('#todo-list');
     const newTodoForm = document.querySelector('#new-todo-form');

     const username = localStorage.getItem('username') || '';
     nameInput.value = username;
})
