
export function displayEditDialog (task, index) {

    const title = document.querySelector("#title-edit");
    const notes = document.querySelector("#notes-edit");
    const dueDate = document.querySelector("#date-edit");
    const category = document.querySelector("#category-edit");
    const low = document.querySelector("#low-edit");
    const mid = document.querySelector("#mid-edit");
    const high = document.querySelector("#high-edit");
    const saveChanges = document.querySelector(".save-changes");

    title.value = task.title;
    notes.value = task.notes;
    dueDate.value = task.duedate;
    category.value = task.category;

    if (task.priority == low.value) {
        low.checked = true;
    } else if (task.priority == mid.value) {
        mid.checked = true;
    } else if (task.priority == high.value) {
        high.checked = true;
    }; 

    saveChanges.setAttribute("data-index", index);

    const dialog2 = document.querySelector ("#edit");
    dialog2.showModal();   
            
    
};  

    //const title = document.querySelector('input[id="title-edit"]');
    //const notes = document.querySelector('input[id="notes-edit"]');
    //const dueDate = document.querySelector('input[id="date-edit"]');
    //const category = document.querySelector('input[id="category-edit"]');
    //const low = document.querySelector("#low-edit");
    //const mid = document.querySelector("#mid-edit");
    //const high = document.querySelector("#high-edit");
    //const saveChanges = document.querySelector(".save-changes");

    //title.value = task.title;
    //notes.value = task.notes;
    //dueDate.value = task.duedate;
    //category.value = task.category;

    //if (task.priority == low.value) {
        //low.checked = true;
    //} else if (task.priority == mid.value) {
        //mid.checked = true;
    //} else if (task.priority == high.value) {
        //high.checked = true;
    //}; 

    //saveChanges.setAttribute("data-index", index);

    //const dialog2 = document.querySelector ("#edit");
    //dialog2.showModal();   
            