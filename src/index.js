import "./styles.css";
//import { loadAllTasks } from "./all-tasks.js";
import { Task } from "./task.js";
//import { saveTaskEdits } from "./save-changes.js";
import { Project } from "./project.js"



const createTaskBtn = document.querySelector(".create-task");
const dialog = document.querySelector("#task-modal");
const addTaskBtn = document.querySelector(".add-task");
const saveTaskChanges = document.querySelector(".save-task-changes");
const cancelBtn = document.querySelector(".cancel");
const createProjBtn = document.querySelector(".create-project");
const dialog2 = document.querySelector("#project-modal");
const addProjBtn = document.querySelector(".add-project");
const saveProjChanges = document.querySelector(".save-proj-changes")
const allTasks = document.querySelector(".all");
//const dueToday = document.querySelector(".due-today");
const projectList = document.querySelector(".project-list");
const main = document.querySelector("main");


createTaskBtn.addEventListener("click", () => {
    const taskForm = document.querySelector(".task");
    taskForm.reset();
    dialog.showModal();
});

addTaskBtn.addEventListener("click", () => {
    Task.createTaskObj();
    main.innerHTML = "";
    Task.loadAllTasks();
});

saveTaskChanges.addEventListener("click", () => {
    Task.saveTaskEdits();
    main.innerHTML = "";
    Task.loadAllTasks();
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
    console.log(Project.projectArray);
});

saveProjChanges.addEventListener("click", () => {
    Project.saveProjectEdits();
    main.innerHTML = "";
    Project.loadProjTasks();
});

allTasks.addEventListener("click", () => {
    main.innerHTML = "";
    Task.loadAllTasks();
});

//dueToday.addEventListener("click", function () {
//});

projectList.addEventListener("click", () => {
    main.innerHTML = "";
    Project.loadProjTasks();

});
