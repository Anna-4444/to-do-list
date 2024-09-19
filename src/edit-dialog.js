import { format } from "date-fns";

export function displayEditDialog (task, index) {

    const title = document.querySelector("#title");
    const notes = document.querySelector("#notes");
    const dueDate = document.querySelector("#date");
    const category = document.querySelector("#category");
    const low = document.querySelector("#low");
    const mid = document.querySelector("#mid");
    const high = document.querySelector("#high");
    const saveChangesBtn = document.querySelector(".save-changes");
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

    

    const dialog = document.querySelector ("#task-modal");
    dialog.showModal();          
    
};  



   

   
