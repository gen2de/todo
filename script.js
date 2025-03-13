const newtaskInput = document.getElementById('newTask');
const addButton = document.getElementById('addtodo');

let todos = [];

function addTodo() {
    const taskText = newtaskInput.value.trim();
    if (taskText === '') return;

    const todo = {
        id: Date.now(),
        text: taskText
    };
    todos.push(todo);

    
    const todoElement = document.createElement('div');
    todoElement.className = 'todo-item';
    todoElement.setAttribute('data-id', todo.id); 
    todoElement.innerHTML = `
        <span>${todo.text}</span>
        <button class="delete-btn">Delete</button>
    `;

    document.querySelector('.main').appendChild(todoElement);

    newtaskInput.value = '';

    const deleteBtn = todoElement.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', function () {
        deleteTodo(todo.id);
    });
}

function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id);

    const todoElement = document.querySelector(`.todo-item[data-id='${id}']`);
    if (todoElement) {
        todoElement.remove();
    }
}

addButton.addEventListener('click', addTodo);
