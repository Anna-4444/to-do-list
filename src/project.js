import { Task } from "./task.js";

export class Project {

    constructor (name) {
        this.name = name;
    };

    static projectArray = [{name: "default"}];

    static createProjObj () {

        const name = document.querySelector("#name").value;
        const dropDown = document.querySelector("#category");
        const option = document.createElement("option");
        option.value = name;
        option.innerText = name;
        dropDown.append(option);

        const newProj = new Project(name);
        Project.projectArray.push(newProj);
        
    };

    static projectEditDialog (project, index) {

        const name = document.querySelector("#name");
        const saveChangesBtn = document.querySelector(".save-proj-changes");
        const addBtn = document.querySelector(".add-project");
        saveChangesBtn.setAttribute("data-index", index);
        saveChangesBtn.classList.remove("hide");
        addBtn.classList.add("hide"); 

        name.value = project.name;

        const dialog = document.querySelector("#project-modal");
        dialog.showModal();          
    
    };

    static saveProjectEdits () {

        const name = document.querySelector("#name").value;
        const saveChangesBtn = document.querySelector(".save-proj-changes");
        const addBtn = document.querySelector(".add-project");
        saveChangesBtn.classList.add("hide");
        addBtn.classList.remove("hide"); 

        const projIndex = Number(saveChangesBtn.getAttribute("data-index"));
        const project = Project.projectArray[projIndex];

        for (let i = 0; i < Task.taskArray.length; i++) {
            if (Task.taskArray[i].category == project.name) {
                Task.taskArray[i].category = name;                
            };
        };

        project.name = name;

    };

    static deleteProject (project, index) {

        for (let i = 0; i < Task.taskArray.length; i++) {
            if (Task.taskArray[i].category == project.name) {
                Task.taskArray.splice(i, 1);                
            };
        };

        const option = document.querySelector(`option[value="${project.name}"]`);
        option.remove();

        Project.projectArray.splice(index, 1);
        const main = document.querySelector("main");
        main.innerHTML = ""
        Project.loadProjTasks();

    }; 
                
    static loadProjTasks () {
         
        const main = document.querySelector("main");

        Project.projectArray.forEach(function (project, index) {
            const projContainer = document.createElement("div");
            projContainer.classList.add("proj-container");
        
            const projName = document.createElement("h2");
            projName.innerText = project.name;
        
            const editProj = document.createElement("button");
            editProj.innerText = "Edit";
                editProj.addEventListener("click", () => {
                    Project.projectEditDialog (project, index);  
                });
        
            const deleteProj = document.createElement("button");
            deleteProj.innerText = "Delete";
            deleteProj.addEventListener("click", () => {
                if (confirm("Delete this project and all of it's tasks?")) {
                    Project.deleteProject(project, index);                    
                } else {
                    //cancel button was selected, do nothing
                };
            });
        
            const taskContainer = document.createElement("div");
            taskContainer.classList.add("task-container");

            let filteredArray = [];
            for (let i = 0; i < Task.taskArray.length; i++) {
                if (Task.taskArray[i].category == project.name) {
                    filteredArray.push(Task.taskArray[i]);
                };
            };

            filteredArray.map(function(obj){
                const taskCard = document.createElement("div");
                taskCard.classList.add("task-card");
                taskCard.setAttribute("data-index", index);
                taskCard.innerHTML = `<button></button> <p>${obj.title} ${obj.notes} ${obj.dueDate} ${obj.category} ${obj.priority} </p>`;
                taskContainer.append(taskCard);
            });

            projContainer.append(projName, editProj, deleteProj, taskContainer );
            main.append(projContainer);
                      
        });    
    };
};