window.addEventListener('load', solve);
function solve() {

    const sectionForm = document.getElementById('form-section');
    const form = document.getElementById('create-task-form');
    const title = document.getElementById('title');
    const taskDescription = document.getElementById('description');
    const taskType = document.getElementById('label');
    const pointsInput = document.getElementById('points');
    const assignee = document.getElementById('assignee');
    const createTaskBtn = document.getElementById('create-task-btn');
    const deleteTaskBtn = document.getElementById('delete-task-btn');
    const tasksSection = document.getElementById('tasks-section');
    const totalPoints = document.getElementById('total-sprint-points');
    let totalPointsValue = 0;
    let reservePoints = 0;

    createTaskBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (title.value === '' || taskDescription.value === '' || taskType.value === '' || pointsInput.value === '' || assignee.value === '') {
                return;
            }
            const taskArticle = document.createElement('article');
            taskArticle.setAttribute('id', `task-${tasksSection.childElementCount + 1}`);
            taskArticle.setAttribute('class', 'task-card');
            const taskLabelDiv = document.createElement('div');
            let taskLabelIcon = '';
            if (taskType.value === 'Feature') {
                taskLabelIcon = '&#8865;';
                taskLabelDiv.setAttribute('class', 'task-card-label feature');
            } else if (taskType.value === 'Low Priority Bug') {
                taskLabelIcon = '&#9737;';
                taskLabelDiv.setAttribute('class', 'task-card-label low-priority');
            } else if (taskType.value === 'High Priority Bug') {
                taskLabelIcon = '&#9888;';
                taskLabelDiv.setAttribute('class', 'task-card-label high-priority');
            }
            taskLabelDiv.innerHTML = `${taskType.value} ${taskLabelIcon}`;
            const taskTitle = document.createElement('h3');
            taskTitle.setAttribute('class', 'task-card-title');
            taskTitle.textContent = title.value;
            const taskDescriptionParagraph = document.createElement('p');
            taskDescriptionParagraph.setAttribute('class', 'task-card-description');
            taskDescriptionParagraph.textContent = taskDescription.value;
            const taskPoints = document.createElement('div');
            taskPoints.setAttribute('class', 'task-card-points');
            taskPoints.textContent = `Estimated at ${pointsInput.value}pts`;
            const taskAssignee = document.createElement('div');
            taskAssignee.setAttribute('class', 'task-card-assignee');
            taskAssignee.textContent = `Assigned to: ${assignee.value}`;
            const taskActions = document.createElement('div');
            taskActions.setAttribute('class', 'task-card-actions');
            const deleteTaskBtn = document.createElement('button');
            deleteTaskBtn.textContent = 'Delete';
            deleteTaskBtn.disabled = false;
            taskActions.appendChild(deleteTaskBtn);
            taskArticle.appendChild(taskLabelDiv);
            taskArticle.appendChild(taskTitle);
            taskArticle.appendChild(taskDescriptionParagraph);
            taskArticle.appendChild(taskPoints);
            taskArticle.appendChild(taskAssignee);
            taskArticle.appendChild(taskActions);
            tasksSection.appendChild(taskArticle);
            totalPointsValue += Number(pointsInput.value);

            totalPoints.textContent = `Total Points: ${totalPointsValue}pts`;
            form.reset();
        }
    )

    tasksSection.addEventListener('click', (e) => {
            if (e.target.tagName === 'BUTTON') {
                const taskToDelete = e.target.parentElement.parentElement;
                // I want to get the estimated points of the target task
                reservePoints = Number(taskToDelete.querySelector('.task-card-points').textContent.split(' ')[2]);
                totalPointsValue -= reservePoints;
                totalPoints.textContent = `Total Points: ${totalPointsValue}pts`;
                taskToDelete.remove();
                title.value = taskToDelete.querySelector('.task-card-title').textContent;
                taskDescription.value = taskToDelete.querySelector('.task-card-description').textContent;
                taskType.value = taskToDelete.querySelector('.task-card-label').textContent.split(' ')[0];
                pointsInput.value = taskToDelete.querySelector('.task-card-points').textContent.split(' ')[2];
                assignee.value = taskToDelete.querySelector('.task-card-assignee').textContent.split(' ')[2];
                createTaskBtn.disabled = true;
                deleteTaskBtn.disabled = false;
                title.disabled = true;
                taskDescription.disabled = true;
                taskType.disabled = true;
                pointsInput.disabled = true;
                assignee.disabled = true;

                deleteTaskBtn.addEventListener('click', (e) => {
                    e.preventDefault()
                    title.value = '';
                    taskDescription.value = '';
                    taskType.value = '';
                    pointsInput.value = '';
                    assignee.value = '';
                    createTaskBtn.disabled = false;
                    deleteTaskBtn.disabled = true;
                    title.disabled = false;
                    taskDescription.disabled = false;
                    taskType.disabled = false;
                    pointsInput.disabled = false;
                    assignee.disabled = false;
                })
            }
        }
    )
}


