const fs = require('fs');
const colors = require('colors');
const file = require('./services/fileManager');

let todolist = [];

let nextId = (id) => {
    return id + 1;
}

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
let update = (description, completed) => {

    file.saveToDo(todo);
}

module.exports = {
    list,
    create,
    update
}