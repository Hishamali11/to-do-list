

let localStoreTasks = localStorage.getItem('tasks');
let tasks = localStoreTasks ? JSON.parse(localStoreTasks) : [];

let localStoreTodoId = localStorage.getItem('todoId');
let todoId = localStoreTodoId ? JSON.parse(localStoreTodoId) : 0;



const addTodo = document.querySelector('form');
const todos = document.querySelector('.todos');



todos.addEventListener('click', (e) => {
    if(e.target.tagName = "I") {
        if(e.target.classList.contains('fa-times-circle')) {
            const id = e.target.parentElement.parentElement.id;
            tasks = tasks.filter((task) => {
                return task.id != id;
            });
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
        renderTodos();
    }
});



todos.addEventListener('click', (e) => {
    if(e.target.tagName = "I") {
        if(e.target.classList.contains('fa-check-square')) {
            const id = e.target.parentElement.parentElement.id;
            const task = tasks.find((task) => {
                return task.id == id;
            });
            task.status = false;
        }
        else if(e.target.classList.contains('fa-square')){
            const id = e.target.parentElement.parentElement.id;
            const task = tasks.find((task) => {
                return task.id == id;
            });
            task.status = true;
        }
        localStorage.setItem('tasks', JSON.stringify(tasks));
        renderTodos();
    }
});


addTodo.addEventListener('submit', (e) => {
    e.preventDefault();
    const todo = addTodo.newtodo.value;

    

    tasks = [
        ...tasks,
        {
            id: todoId++,
            task: todo,
            status: false
        }
    ]

    

    localStorage.setItem('tasks', JSON.stringify(tasks));
    localStorage.setItem('todoId', JSON.stringify(todoId));

    

    renderTodos();

    

    addTodo.reset();
});



function renderTodos() {

    

    todos.innerHTML = "";

    

    tasks.forEach((task) => {
        const html = `
            <li id="${task.id}">
                <p class="${!task.status ? '' : 'task-complete'}"> 
                    ${task.task} 
                </p>
                <span>
                    <i class="${!task.status ? 'far fa-square' : 'fas fa-check-square'}"></i>
                    <i class="fas fa-times-circle"></i>
                </span>
            </li>
        `;
        todos.innerHTML += html;
    });
}



function initApplication() {
    renderTodos();
}

initApplication();