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

};

//export function formElements () {}


export function createTaskObj() {

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