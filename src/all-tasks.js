import {displayEditDialog} from "./edit-dialog.js"

export function loadAllTasks(taskArray) {

    //clear out the main html
    const main = document.querySelector("main");
    main.innerHTML = "";

    //loop through the task array. create and display a task card for each task object
    taskArray.forEach(function (task, index) {

        let taskCard = document.createElement("div");
        taskCard.classList.add("task-card");
        taskCard.setAttribute("data-index", index);
        taskCard.innerHTML = `<button></button> <p>${task.title} ${task.notes} ${task.duedate} ${task.category} ${task.priority} </p>`;

        const editTask = document.createElement("button");
        editTask.innerText = "Edit";
        editTask.addEventListener("click", () => {
            displayEditDialog(task, index); 
        });

        const deleteTask = document.createElement("button");
        deleteTask.innerText = "Delete";
        deleteTask.addEventListener("click", () => {
            taskArray.splice(index, 1);
            loadAllTasks(taskArray);
        });
        
        taskCard.append(editTask, deleteTask);
        main.append(taskCard);
    })
};



