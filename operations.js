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
        id: todolist.length + 1,
        description,
        completed: false
    };

    todolist.push(todoCreate);

    let data = JSON.stringify(todolist);

    file.saveToDo(data);

    return todoCreate;
}
let update = (id, description, completed) => {

    // //Read the file
    // todolist = list();

    // todolist[id].description = description;

    // var isTrueSet = (completed == 'true');
    // todolist[id].completed = isTrueSet;

    // let data = JSON.stringify(todolist);

    // file.saveToDo(data);
}

module.exports = {
    list,
    create,
    update
}