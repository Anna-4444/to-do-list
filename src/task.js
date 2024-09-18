export class Task {
    constructor (title, notes, duedate, category, priority) {
        this.title = title;
        this.notes = notes;
        this.duedate = duedate;
        this.category = category;
        this.priority = priority;
    };

}

export function createTaskObj(taskArray) {

    const title = document.querySelector("#title").value;
    const notes = document.querySelector("#notes").value;
    const duedate = document.querySelector("#date").value;
    const category = document.querySelector("#category").value;
    let priority = "";
    const low = document.querySelector("#low");
    const mid = document.querySelector("#mid");
    const high = document.querySelector("#high");
    if (low.checked) {
        priority = low.value;
    } else if (mid.checked) {
        priority = mid.value;
    } else if (high.checked) {
        priority = high.value;
    };

    const newTask = new Task(title, notes, duedate, category, priority);
    taskArray.push(newTask);
};