import "./styles.css";
import {loadAllTasks} from "./all-tasks.js";
import {createTaskObj, Task} from "./task.js";
import {saveTaskChanges} from "./save-changes.js";


const taskArray = [];
const createTaskBtn = document.querySelector(".create-task");
const addTaskBtn = document.querySelector(".add-task")
const allTasks = document.querySelector(".all");
const dueToday = document.querySelector(".due-today");
const projectList = document.querySelector("project-list");
const dialog1 = document.querySelector("#create");
const dialog2 = document.querySelector ("#edit");
const closeModal1 = document.querySelector(".modal-close");
const closeModal2 = document.querySelector(".modal-close-edit");
const saveChanges = document.querySelector(".save-changes");
const cancelChanges = document.querySelector(".cancel-changes");


createTaskBtn.addEventListener("click", () => {
    dialog1.showModal();
    const taskForm = document.querySelector("form");
    taskForm.reset();
});

addTaskBtn.addEventListener("click", () => {
    createTaskObj(taskArray);
    loadAllTasks(taskArray);
});

allTasks.addEventListener("click", () => {
    loadAllTasks(taskArray);
});

//dueToday.addEventListener("click", function () {
//});

//projectList.addEventListener("click", function () {
//});

closeModal1.addEventListener("click", () => {
    dialog1.close();
});

closeModal2.addEventListener("click", () => {
    dialog2.close();
});

cancelChanges.addEventListener("click", () => {
    dialog2.close();
});

saveChanges.addEventListener("click", () => {
    saveTaskChanges(taskArray);
});



