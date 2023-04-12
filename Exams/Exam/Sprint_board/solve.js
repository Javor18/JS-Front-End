const baseUrl = 'http://localhost:3030/jsonstore/tasks';
const loadBtn = document.getElementById('load-board-btn');
const addBtn = document.getElementById('create-task-btn');
const taskTitle = document.getElementById('title');
const taskDescription = document.getElementById('description');
const board = document.getElementById('board-section');
const todoSection = document.getElementById('todo-section');
const inProgressSection = document.getElementById('in-progress-section');
const reviewSection = document.getElementById('code-review-section');
const doneSection = document.getElementById('done-section');
const todoList = document.getElementById('todo-list');


    function attachEvents() {
        loadBtn.addEventListener('click', loadBoard);
        addBtn.addEventListener('click', addTask);
}

function addTask(e) {
        e.preventDefault();

        if (taskTitle.value === '' || taskDescription.value === '') {
            return;
        }

        const task = {
            title: taskTitle.value,
            description: taskDescription.value,
            status: 'ToDo'
        };

        fetch(baseUrl, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(task)
        })
            .then(res => res.json())
            .then(data => {
                todoSection.appendChild(createTask(data));
                taskTitle.value = '';
                taskDescription.value = '';
            });
}
function loadBoard(e) {

        todoSection.innerHTML = '';
        inProgressSection.innerHTML = '';
        reviewSection.innerHTML = '';
        doneSection.innerHTML = '';

        fetch(baseUrl)
            .then(res => res.json())
            .then(data => {
                Object.values(data).forEach(task => {
                    if (task.status === 'ToDo') {
                        todoSection.appendChild(createTask(task));
                    } else if (task.status === 'In Progress') {
                        inProgressSection.appendChild(createTask(task));
                    } else if (task.status === 'Code Review') {
                        reviewSection.appendChild(createTask(task));
                    } else if (task.status === 'Done') {
                        doneSection.appendChild(createTask(task));

                    }
                });
            }
        );
}

function createTask(task) {
        const taskElement = document.createElement('li');
        taskElement.className = 'task';
        taskElement.id = task._id;

        const title = document.createElement('h3');
        title.textContent = task.title;

        const description = document.createElement('p');
        description.textContent = task.description;

        const moveBtn = document.createElement('button');
        moveBtn.textContent = getMoveBtnText(task);
        moveBtn.addEventListener('click', moveTask);

        taskElement.appendChild(title);
        taskElement.appendChild(description);
        taskElement.appendChild(moveBtn);

        return taskElement;
}

function getMoveBtnText(task) {
        if (task.status === 'ToDo') {
            return 'Move to In Progress';
        } else if (task.status === 'In Progress') {
            return 'Move to Code Review';
        } else if (task.status === 'Code Review') {
            return 'Move to Done';
        } else if (task.status === 'Done') {
            return 'Close';
        }
}

function moveTask(e) {
        const task = e.target.parentNode;
        const taskId = task.id;
        const taskTitle = task.querySelector('h3').textContent;
        const taskDescription = task.querySelector('p').textContent;
        const taskStatus = getTaskStatus(e.target.textContent);

        fetch(`${baseUrl}/${taskId}`, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({title: taskTitle, description: taskDescription, status: taskStatus})
        })
            .then(res => res.json())
            .then(data => {
                task.remove();
                loadBoard();
            });

        if (taskStatus === 'Closed') {
            fetch(`${baseUrl}/${taskId}`, {
                method: 'DELETE'
            });
        }
}

function getTaskStatus(btnText) {
        if (btnText === 'Move to In Progress') {
            return 'In Progress';
        } else if (btnText === 'Move to Code Review') {
            return 'Code Review';
        } else if (btnText === 'Move to Done') {
            return 'Done';
        } else if (btnText === 'Close') {
            return 'Closed';
        }
}





attachEvents();