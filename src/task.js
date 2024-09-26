import { format, isToday } from "date-fns";

export class Task {

    constructor (title, notes, dueDate, category, priority) {
        this.title = title;
        this.notes = notes;
        this.dueDate = dueDate;
        this.category = category;
        this.priority = priority;
    };

    static taskArray = [];

    static createTaskObj() {

        const title = document.querySelector("#title").value;
        const notes = document.querySelector("#notes").value;
        const date = document.querySelector("#date").value;
        console.log(date) //2024-09-24
        const dueDate = format(date.replace(/-/g, '/'), 'MMM d yyyy'); 
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
        
        console.log(Task.taskArray);
    
    };
    
    static taskEditDialog (task, index) {
        
        console.log(task, index)

        const title = document.querySelector("#title");
        const notes = document.querySelector("#notes");
        const date = document.querySelector("#date");
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
        date.value = format(task.dueDate, 'yyyy-MM-dd')
        category.value = task.category;

        console.log(task.dueDate)
        console.log(task.category)
    
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
        const date = document.querySelector("#date").value;
        const dueDate = format(date.replace(/-/g, '/'), 'MMM d, yyyy');
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
        task.dueDate = dueDate;
        task.category = category;
    
        if (low.checked) {
            task.priority = low.value;
        } else if (mid.checked) {
            task.priority = mid.value;
        } else if (high.checked) {
            task.priority = high.value;
        };
    
    };    

    static checkUncheck (index) {
        const allTaskCards = Array.from(document.querySelectorAll(".task-card"));
        const thisTaskCard = allTaskCards[index];
        const allCheckBtns = Array.from(document.querySelectorAll(".item-one"));
        const thisCheckBtn = allCheckBtns[index];

        console.log(allTaskCards);
        console.log(thisTaskCard);
        console.log(allCheckBtns)
        console.log(thisCheckBtn);

        if (thisTaskCard.classList.contains("check-box")) {
            thisTaskCard.classList.remove("check-box");
            thisCheckBtn.classList.add("check-size");
            thisCheckBtn.innerHTML = '';
        } else {
            thisTaskCard.classList.add("check-box");
            thisCheckBtn.classList.remove("check-size");
            thisCheckBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
        };
    };

    static loadAllTasks() {

        const main = document.querySelector("main");
        main.classList.remove("today-tasks", "project-list");
        main.classList.add("all-tasks");
        const taskContainer = document.createElement("div");
        taskContainer.classList.add("task-container");
        main.append(taskContainer);
        
        Task.taskArray.forEach((task, index) => {
    
            const taskCard = document.createElement("div");
            taskCard.classList.add("task-card");
            taskCard.setAttribute("data-index", index);

            taskCard.innerHTML = `<p>${task.title}</p> <p>${task.notes}</p> <p>${task.dueDate}</p> <p>${task.category}</p>`;
            
            const priority = document.createElement("p");// this could be a p
            priority.classList.add("priority"); //this css will make it a circle
            //this will make the circle green, yellow, or red
            if (task.priority == "low") {
                priority.classList.remove("mid", "high")
                priority.classList.add("low")
            } else if (task.priority == "mid") {
                priority.classList.remove("low", "high") 
                priority.classList.add("mid")
            } else if (task.priority == "high") {
                priority.classList.remove("mid", "low")
                priority.classList.add("high")
            }

            const checkBox = document.createElement("button");
            checkBox.classList.add("item-one", "check-size");
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
                Task.loadAllTasks();
            });
            
            taskCard.append(priority, checkBox, editTask, deleteTask);
            taskContainer.append(taskCard);   
        })
    };

    static loadTodayTasks() {

        const main = document.querySelector("main");
        main.classList.remove("all-tasks", "project-list");
        main.classList.add("today-tasks");
        const taskContainer = document.createElement("div");
        taskContainer.classList.add("task-container");
        main.append(taskContainer);
    
        Task.taskArray.forEach((task, index) => {
            
            if (isToday(task.dueDate)) {
                
                let taskCard = document.createElement("div");
                taskCard.classList.add("task-card");
                taskCard.setAttribute("data-index", index);

                taskCard.innerHTML = `<p>${task.title}</p> <p>${task.notes}</p> <p>${task.dueDate}</p> <p>${task.category}</p>`;
                const priority = document.createElement("p");// this could be a p
                priority.classList.add("priority"); //this css will make it a circle
                //this will make the circle green, yellow, or red
                if (task.priority == "low") {
                    priority.classList.remove("mid", "high")
                    priority.classList.add("low")
                } else if (task.priority == "mid") {
                    priority.classList.remove("low", "high") 
                    priority.classList.add("mid")
                } else if (task.priority == "high") {
                    priority.classList.remove("mid", "low")
                    priority.classList.add("high")
                }
                const checkBox = document.createElement("button");
                checkBox.classList.add("item-one", "check-size");
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
                    Task.loadTodayTasks();
                });
                
                taskCard.append(checkBox, editTask, deleteTask);
                taskContainer.append(taskCard); 
            };
        });  
    };
};


