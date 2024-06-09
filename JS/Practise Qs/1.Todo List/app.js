//ToDo App

let todo = [];

let req = prompt("enter your request");
console.log(req);

while (true) {
    if (req == "quit") {
        console.log("quitting... app");
        break;
    }
    if (req == "list") {
        console.log("--------------------------------");
        for (let i = 0; i < todo.length; i++) {
            console.log(i, todo[i]);
        }
    } else if (req == "add") {
        let task = prompt("enter task you want to add");
        todo.push(task);
        console.log("task added");
    } else if (req == "delete") {
        let idx = prompt("enter task index to delete");
        todo.splice(idx, 1);
        console.log("task deleted");
    } else {
        confirm("Wrong request");
    }

    req = prompt("enter your request");
}