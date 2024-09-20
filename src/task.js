import { format } from "date-fns";

export class Task {

    constructor (title, notes, dueDate, category, priority) {
        this.title = title;
        this.notes = notes;
        this.dueDate = format(new Date(dueDate), 'MM/dd/yyyy');
        this.category = category;
        this.priority = priority;
    };

    static taskArray = [];

    static createTaskObj() {

        const title = document.querySelector("#title").value;
        const notes = document.querySelector("#notes").value;
        const dueDate = document.querySelector("#date").value;
        const category = document.querySelector("#category").value;
        const low = document.querySelector("#low");
        const mid = document.querySelector("#mid");
        const high = document.querySelector("#high");
        
        let priority = "";
        if (low.checked) {
            priority = low.value;
        } else if (mid.checked) {
            priority = mid.value;
        } else if (high.checked) {
            priority = high.value;
        };
    
        const newTask = new Task(title, notes, dueDate, category, priority);
        Task.taskArray.push(newTask);
    
    };
    
    static taskEditDialog (task, index) {

        const title = document.querySelector("#title");
        const notes = document.querySelector("#notes");
        const dueDate = document.querySelector("#date");
        const category = document.querySelector("#category");
        const low = document.querySelector("#low");
        const mid = document.querySelector("#mid");
        const high = document.querySelector("#high");
        const saveChangesBtn = document.querySelector(".save-task-changes");
        const addBtn = document.querySelector(".add-task");
        
        saveChangesBtn.setAttribute("data-index", index);
        saveChangesBtn.classList.remove("hide");
        addBtn.classList.add("hide"); 
    
        title.value = task.title;
        notes.value = task.notes;
        dueDate.value = task.dueDate//format(new Date(task.dueDate), 'MM/dd/yyyy');
        category.value = task.category;
    
        if (task.priority == low.value) {
            low.checked = true;
        } else if (task.priority == mid.value) {
            mid.checked = true;
        } else if (task.priority == high.value) {
            high.checked = true;
        }; 
    
        const dialog = document.querySelector("#task-modal");
        dialog.showModal();          
        
    };  
    
    static saveTaskEdits () {
        
        const title = document.querySelector("#title").value;
        const notes = document.querySelector("#notes").value;
        const dueDate = document.querySelector("#date").value;
        const category = document.querySelector("#category").value;
        const low = document.querySelector("#low");
        const mid = document.querySelector("#mid");
        const high = document.querySelector("#high");
        const saveChangesBtn = document.querySelector(".save-task-changes");
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
    
    static loadAllTasks() {

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
                Task.taskEditDialog(task, index); 
            });
    
            const deleteTask = document.createElement("button");
            deleteTask.innerText = "Delete";
            deleteTask.addEventListener("click", () => {
                Task.taskArray.splice(index, 1);
                main.innerHTML = "";
                Task.loadAllTasks(Task.taskArray);
            });
            
            taskCard.append(editTask, deleteTask);
            main.append(taskCard);
        })
    };
};
