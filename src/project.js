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

        console.log(Project.projectArray);
        
    };

    static projectEditDialog (project, index) {

        console.log(project, index);

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

        const option = document.querySelector(`option[value="${project.name}"]`);
        project.name = name;
        option.innerText = name;
        option.value = name;
        
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
        Project.loadProjCont();
        Project.loadTasksToProjCont();;

    }; 
            
    static loadProjCont () {
    
        const main = document.querySelector("main");
        main.classList.remove("all-tasks", "today-tasks");
        main.classList.add("project-list");

        Project.projectArray.forEach((project, index) => {
            const projContainer = document.createElement("div");
            projContainer.classList.add("proj-container");
        
            const projName = document.createElement("h2");
            projName.innerText = project.name;
        
            const editProj = document.createElement("button");
            editProj.innerHTML = '<i class="fa-regular fa-pen-to-square"></i>';
                editProj.addEventListener("click", () => {
                    Project.projectEditDialog (project, index);  
                });
        
            const deleteProj = document.createElement("button");
            deleteProj.innerHTML = '<i class="fa-regular fa-trash-can"></i>';
            deleteProj.addEventListener("click", () => {
                if (confirm("Delete this project and all of it's tasks?")) {
                    Project.deleteProject(project, index);                    
                } else {
                    //cancel button was selected, do nothing
                };
            });
        
            const taskContainer = document.createElement("div");
            taskContainer.classList.add("task-container");
            taskContainer.setAttribute("data-index", index);
            projContainer.append(projName, editProj, deleteProj, taskContainer );
            main.append(projContainer);
        });    
    };   

            
    static loadTasksToProjCont () {

        for (let i = 0; i < Project.projectArray.length; i++) {

            Task.taskArray.forEach((task, index) => {
            
                if (task.category == Project.projectArray[i].name) {
                    
                    const main = document.querySelector("main");

                    const taskCard = document.createElement("div");
                    taskCard.classList.add("task-card");
                    taskCard.setAttribute("data-index", index);

                    taskCard.innerHTML = `<p>${task.title}</p> <p>${task.notes}</p> <p>${task.dueDate}</p> <p>${task.category}</p> <p>${task.priority}</p>`;

                    const checkBox = document.createElement("button");
                    checkBox.classList.add("item-one");
                    checkBox.addEventListener("click", () => {
                        Task.checkUncheck(index);
                    });

                    const editTask = document.createElement("button");
                    editTask.innerHTML = '<i class="fa-regular fa-pen-to-square"></i>';
                    editTask.addEventListener("click", () => {
                        Task.taskEditDialog(task, index); 
                        
                    });
        
                    const deleteTask = document.createElement("button");
                    deleteTask.innerHTML = '<i class="fa-regular fa-trash-can"></i>';
                    deleteTask.addEventListener("click", () => {
                        Task.taskArray.splice(index, 1);
                        main.innerHTML = "";
                        Project.loadProjCont();
                        Project.loadTasksToProjCont();
                    });

                    taskCard.append(checkBox, editTask, deleteTask);

                    const taskContainers = Array.from(document.querySelectorAll(".task-container"));
                    console.log(taskContainers[i]);
        
                    taskContainers[i].append(taskCard); 
                };
            });  
        };
    };
};   