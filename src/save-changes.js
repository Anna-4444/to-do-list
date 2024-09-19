import { Task } from "./task.js";
import { format } from "date-fns";

export function saveTaskChanges () {
        
    const title = document.querySelector("#title").value;
    const notes = document.querySelector("#notes").value;
    const dueDate = document.querySelector("#date").value;
    const category = document.querySelector("#category").value;
    const low = document.querySelector("#low");
    const mid = document.querySelector("#mid");
    const high = document.querySelector("#high");
    const saveChangesBtn = document.querySelector(".save-changes");
    const addBtn = document.querySelector(".add-task");

    const taskIndex = Number(saveChangesBtn.getAttribute("data-index"));
    const task = Task.taskArray[taskIndex];
    saveChangesBtn.classList.add("hide");
    addBtn.classList.remove("hide"); 

    task.title = title;
    task.notes = notes;
    task.dueDate = format(new Date(dueDate), 'MM/dd/yyyy');
    task.category = category;

    if (low.checked) {
        task.priority = low.value;
    } else if (mid.checked) {
        task.priority = mid.value;
    } else if (high.checked) {
        task.priority = high.value;
    };

};    
    