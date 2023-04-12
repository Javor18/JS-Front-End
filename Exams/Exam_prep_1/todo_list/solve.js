// TODO

const BASE_URL = 'http://localhost:3030/jsonstore/tasks/';
const loadBtn = document.getElementById('load-button');
const addBtn = document.getElementById('add-button');
const textInput = document.getElementById('title"');
const todoList = document.getElementById('todo-list');
// const removeBtn = document.getElementById('remove-btn');
// const editBtn = document.getElementById('edit-btn');


function attachEvents() {
    loadBtn.addEventListener('click', loadTasks);
    addBtn.addEventListener('click', addTask);
}

    function loadTasks(e) {
    if (e) {
        e.preventDefault();
    }
    todoList.innerHTML = '';

        fetch(BASE_URL)
            .then(res => res.json())
            .then(data => {
                Object.values(data).forEach(task => {
                    const li = document.createElement('li');
                    li.setAttribute('id', task._id);

                    const span = document.createElement('span');
                    span.textContent = task.name;
                    li.appendChild(span);
                    const removeBtn = document.createElement('button');
                    removeBtn.textContent = 'Remove';
                    removeBtn.addEventListener('click', removeTask);
                    li.appendChild(removeBtn);
                    const editBtn = document.createElement('button');
                    editBtn.textContent = 'Edit';
                    editBtn.addEventListener('click', editTask);
                    li.appendChild(editBtn);
                    todoList.appendChild(li);
                });

            });
    }

function addTask(e) {
    e.preventDefault();
    const task = {
        name: textInput.value
    };
    fetch(BASE_URL, {
        method: 'POST',
        body: JSON.stringify(task)
    })
        .then(res => res.json())
        .then(data => {
            loadTasks();
        });
}

//     When the user clicks the "Add" button, a new task is created with the given name and added to the todo list.
// The input field should be cleared after the task is added.
// The new task should be added to the server as well.


function removeTask(e) {
    const id = e.target.parentNode.id;
    fetch(BASE_URL + id, {
        method: 'DELETE'
    })
        .then(res => res.json())
        .then(data => {
            loadTasks();
        });
}

function editTask(e) {
    const id = e.target.parentNode.id;
    const li = e.target.parentNode;
    const span = li.querySelector('span');
    const input = document.createElement('input');
    input.value = span.textContent;
    li.innerHTML = '';
    li.appendChild(input);
    const removeBtns = document.createElement('button');
    removeBtns.textContent = 'Remove';
    removeBtns.addEventListener('click', () => {
        removeTask(e);
    });
    const submitBtn = document.createElement('button');
    submitBtn.textContent = 'Submit';
    submitBtn.addEventListener('click', () => {
        const task = {
            name: input.value
        };
        fetch(BASE_URL + id, {
            method: 'PUT',
            body: JSON.stringify(task)
        })
            .then(res => res.json())
            .then(data => {
                loadTasks();
            });
    });
    li.appendChild(removeBtns);
    li.appendChild(submitBtn);
}


attachEvents();
