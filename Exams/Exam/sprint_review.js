function solve(input) {
    let n = Number(input.shift());
    let board = {};
    for (let i = 0; i < n; i++) {
        let [assignee, taskId, title, status, estimatedPoints] = input[i].split(':');
        if (!board.hasOwnProperty(assignee)) {
            board[assignee] = [];
        }
        board[assignee].push({
            taskId,
            title,
            status,
            estimatedPoints: Number(estimatedPoints)
        });
    }
    for (let i = n; i < input.length; i++) {
        let [command, ...params] = input[i].split(':');
        if (command === 'Add New') {
            let [assignee, taskId, title, status, estimatedPoints] = params;
            if (!board.hasOwnProperty(assignee)) {
                console.log(`Assignee ${assignee} does not exist on the board!`);
            } else {
                board[assignee].push({
                    taskId,
                    title,
                    status,
                    estimatedPoints: Number(estimatedPoints)
                });
            }
        } else if (command === 'Change Status') {
            let [assignee, taskId, newStatus] = params;
            if (!board.hasOwnProperty(assignee)) {
                console.log(`Assignee ${assignee} does not exist on the board!`);
            } else {
                let task = board[assignee].find(t => t.taskId === taskId);
                if (task) {
                    task.status = newStatus;
                } else {
                    console.log(`Task with ID ${taskId} does not exist for ${assignee}!`);
                }
            }
        } else if (command === 'Remove Task') {
            let [assignee, index] = params;
            if (!board.hasOwnProperty(assignee)) {
                console.log(`Assignee ${assignee} does not exist on the board!`);
            } else {
                if (board[assignee][index]) {
                    board[assignee].splice(index, 1);
                } else {
                    console.log(`Index is out of range!`);
                }
            }
        }
    }
    let toDo = 0;
    let inProgress = 0;
    let codeReview = 0;
    let done = 0;
    for (let assignee in board) {
        for (let task of board[assignee]) {
            if (task.status === 'ToDo') {
                toDo += task.estimatedPoints;

            } else if (task.status === 'In Progress') {
                inProgress += task.estimatedPoints;
            }
            else if (task.status === 'Code Review') {
                codeReview += task.estimatedPoints;
            }
            else if (task.status === 'Done') {
                done += task.estimatedPoints;
            }

            }

}

console.log(`ToDo: ${toDo}pts`);
console.log(`In Progress: ${inProgress}pts`);
console.log(`Code Review: ${codeReview}pts`);
console.log(`Done Points: ${done}pts`);
if (done >= toDo + inProgress + codeReview) {
    console.log(`Sprint was successful!`);

} else {
    console.log(`Sprint was unsuccessful...`);
}
}

solve(    [
    '5',
    'Kiril:BOP-1209:Fix Minor Bug:ToDo:3',
    'Mariya:BOP-1210:Fix Major Bug:In Progress:3',
    'Peter:BOP-1211:POC:Code Review:5',
    'Georgi:BOP-1212:Investigation Task:Done:2',
    'Mariya:BOP-1213:New Account Page:In Progress:13',
    'Add New:Kiril:BOP-1217:Add Info Page:In Progress:5',
    'Change Status:Peter:BOP-1290:ToDo',
    'Remove Task:Mariya:1',
    'Remove Task:Joro:1',
])

