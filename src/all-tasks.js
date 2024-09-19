import {displayEditDialog} from "./edit-dialog.js"
import { Task } from "./task.js";

export function loadAllTasks() {

    const main = document.querySelector("main");

    //loop through the task array. create and display a task card for each task object
    Task.taskArray.forEach(function (task, index) {

        let taskCard = document.createElement("div");
        taskCard.classList.add("task-card");
        taskCard.setAttribute("data-index", index);
        taskCard.innerHTML = `<button></button> <p>${task.title} ${task.notes} ${task.dueDate} ${task.category} ${task.priority} </p>`;

        const editTask = document.createElement("button");
        editTask.innerText = "Edit";
        editTask.addEventListener("click", () => {
            displayEditDialog(task, index); 
        });

        const deleteTask = document.createElement("button");
        deleteTask.innerText = "Delete";
        deleteTask.addEventListener("click", () => {
            Task.taskArray.splice(index, 1);
            main.innerHTML = "";
            loadAllTasks(Task.taskArray);
        });
        
        taskCard.append(editTask, deleteTask);
        main.append(taskCard);
    })
};



