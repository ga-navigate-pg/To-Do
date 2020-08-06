const fs = require('fs');
const colors = require('colors');
const file = require('./services/fileManager');

let todolist = [];

let list = () => {
    return file.readToDo();
}

let create = (description) => {

    //Read the file
    todolist = list();


    let todoCreate = {
        description,
        completed: false
    };

    todolist.push(todoCreate);

    let data = JSON.stringify(todolist);

    file.saveToDo(data);

    return todoCreate;
}
let update = (todo) => {
    file.saveToDo(todo);
}

module.exports = {
    list,
    create,
    update
}