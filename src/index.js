import "./styles.css";
//import { library, icon } from "@fortawesome/fontawesome-svg-core"
//import { faCalendar } from "@fortawesome/free-regular-svg-icons"
import { Task } from "./task.js";
import { Project } from "./project.js"

//library.add(faCalendar);
//const calendar = icon({ prefix: 'fas', iconName: 'calendar'});

const saveChangesBtn = document.querySelector(".save-task-changes");
const addBtn = document.querySelector(".add-task");

const createTaskBtn = document.querySelector(".create-task");
const dialog = document.querySelector("#task-modal");
//const addTaskBtn = document.querySelector(".add-task");
//const saveTaskChanges = document.querySelector(".save-task-changes");
const cancelBtn = document.querySelector(".cancel");
const createProjBtn = document.querySelector(".create-project");
const dialog2 = document.querySelector("#project-modal");
const addProjBtn = document.querySelector(".add-project");
const saveProjChanges = document.querySelector(".save-proj-changes")
const allTasks = document.querySelector(".all");
const dueToday = document.querySelector(".due-today");
const projectList = document.querySelector(".project-list");
const main = document.querySelector("main");
const checkBox = document.querySelector("#check")

//createTaskBtn.innerContent = calendar;
//console.log(calendar)

createTaskBtn.addEventListener("click", () => {
    const taskForm = document.querySelector(".task");
    taskForm.reset();
    saveChangesBtn.classList.add("hide");
    addBtn.classList.remove("hide"); 
    dialog.showModal();
});

addBtn.addEventListener("click", () => {
    Task.createTaskObj();
    main.innerHTML = "";
    if (main.classList.contains("project-list")) {
        Project.loadProjCont();
        Project.loadTasksToProjCont();
    } else if (main.classList.contains("today-tasks")) {
        Task.loadTodayTasks();
    } else {
        Task.loadAllTasks();
    }
});

saveChangesBtn.addEventListener("click", () => {
    Task.saveTaskEdits();
    main.innerHTML = "";
    if (main.classList.contains("project-list")) {
        Project.loadProjCont();
        Project.loadTasksToProjCont();
    } else if (main.classList.contains("today-tasks")) {
        Task.loadTodayTasks();
    } else {
        Task.loadAllTasks();
    }
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

saveProjChanges.addEventListener("click", () => {
    Project.saveProjectEdits();
    main.innerHTML = "";
    Project.loadProjCont();
    Project.loadTasksToProjCont();
});

allTasks.addEventListener("click", () => {
    main.innerHTML = "";
    Task.loadAllTasks();
});

dueToday.addEventListener("click", () => {
    main.innerHTML = "";
    Task.loadTodayTasks();
});

projectList.addEventListener("click", () => {
    main.innerHTML = "";
    Project.loadProjCont();
    Project.loadTasksToProjCont();

});