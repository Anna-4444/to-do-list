    
export function saveTaskChanges (taskArray) {

    const taskIndex = Number(saveChanges.getAttribute("data-index"));
    const title = document.querySelector("#title-edit");
    const notes = document.querySelector("#notes-edit");
    const dueDate = document.querySelector("#date-edit");
    const category = document.querySelector("#category-edit");
    const low = document.querySelector("#low-edit");
    const mid = document.querySelector("#mid-edit");
    const high = document.querySelector("#high-edit");

    taskArray[taskIndex].title = title.value;
    taskArray[taskIndex].notes = notes.value;
    taskArray[taskIndex].duedate = dueDate.value;
    taskArray[taskIndex].category = category.value;

    if (low.checked) {
        taskArray[taskIndex].priority = low.value;
    } else if (mid.checked) {
        taskArray[taskIndex].priority = mid.value;
    } else if (high.checked) {
        taskArray[taskIndex].priority = high.value;
    };

    loadAllTasks(taskArray);
};    
    