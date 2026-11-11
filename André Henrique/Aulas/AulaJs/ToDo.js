const input = document.querySelector('#taskInput');
const button = document.querySelector('#addTaskButton');
const taskList = document.querySelector('#taskList');


let tasks = [];

function addTask() {
    const text = input.value;
    if (!text)   return;
    const task = {id: Date.now(), text, completed: false};
    tasks.push(task);
    renderTasks(tasks);
}

function renderTasks(tasksList) {
    const li = document.createElement('li');
    li.className = 'task-item';
    li.dataset.id = tasksList.id;
    li.innerHTML = `
        <span class="task-text">${tasksList.text}</span>
        <button class="btn btn-sm btn-outline-success" data-action="complete">OK</button>
        <button class="btn btn-sm btn-outline-danger" data-action="delete">X</button>
    `;
    
    li.querySelector(".text").textContent = tasksList.text;
    taskList.appendChild(li);
}


button.addEventListener('click', addTask);