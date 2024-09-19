import "./styles.css";
import {loadAllTasks} from "./all-tasks.js";
import {createTaskObj, Task} from "./task.js";
import {saveTaskChanges} from "./save-changes.js";
import { Project } from "./project.js"


//const taskArray = [];
const createTaskBtn = document.querySelector(".create-task");
const dialog = document.querySelector("#task-modal");
const addTaskBtn = document.querySelector(".add-task");
const saveChanges = document.querySelector(".save-changes");
const cancelBtn = document.querySelector(".cancel");
const createProjBtn = document.querySelector(".create-project");
const dialog2 = document.querySelector("#project-modal");
const addProjBtn = document.querySelector(".add-project")
const allTasks = document.querySelector(".all");
//const dueToday = document.querySelector(".due-today");
const projectList = document.querySelector(".project-list");
const main = document.querySelector("main");

//const dialog2 = document.querySelector ("#edit");
//const closeModal1 = document.querySelector(".modal-close");
//const closeModal2 = document.querySelector(".modal-close-edit");



createTaskBtn.addEventListener("click", () => {
    const taskForm = document.querySelector(".task");
    taskForm.reset();
    dialog.showModal();
});

addTaskBtn.addEventListener("click", () => {
    createTaskObj();
    main.innerHTML = "";
    loadAllTasks();
    console.log(Task.taskArray);
});

saveChanges.addEventListener("click", () => {
    saveTaskChanges();
    console.log(Task.taskArray);
    main.innerHTML = "";
    loadAllTasks();
});

cancelBtn.addEventListener("click", () => {
    dialog.close();
    dialog2.close();
});

createProjBtn.addEventListener("click", () => {
    const projForm = document.querySelector(".project");
    projForm.reset();
    dialog2.showModal();
});

addProjBtn.addEventListener("click", () => {
    Project.createProjObj();
});

allTasks.addEventListener("click", () => {
    main.innerHTML = "";
    loadAllTasks();
});

//dueToday.addEventListener("click", function () {
//});

projectList.addEventListener("click", () => {
    main.innerHTML = "";
    loadProjTasks();

});

//closeModal1.addEventListener("click", () => {
//    dialog1.close();
//});

//closeModal2.addEventListener("click", () => {
//    dialog2.close();
//});



