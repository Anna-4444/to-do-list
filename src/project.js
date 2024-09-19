export class Project {
    constructor (name) {
        this.name = name;
    }
    static projectArray = [];

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
};
//default will need to be added to the project array??
//Project.projectArray.forEach(function (project, index) {});
const main = document.querySelector("main");

for (project of Project.projectArray) {

    let projContainer = document.createElement("div");
    projContainer.classList.add("proj-container");

    let projName = document.createElement("h2");
    projName.innerText = project.name.toUpperCase();

    const editProj = document.createElement("button");
    editProj.innerText = "Edit";
    editProj.addEventListener("click", () => {
            //displayEditDialog(task, index); 
    });

    const deleteTask = document.createElement("button");
    deleteTask.innerText = "Delete";
    deleteTask.addEventListener("click", () => {
        //Task.taskArray.splice(index, 1);
        //main.innerHTML = "";
        //loadAllTasks(Task.taskArray);
    });

    let taskContainer = document.createElement("div");
    taskContainer.classList.add("task-container");

    projContainer.append(projName, editProj, deleteProj, taskContainer );
    main.append(projContainer);

    //const variable = function checkThisProjectName(this project) {
    //loop throught the task array, if project.name 
    //includes/matches/===task.category, 
    //push that task to an array. return the array (to the variable).
    //take that variable.for each load the title, notes, date, priority
    //into a div, then append all divs to the taskCOntainer   
    //}
};
