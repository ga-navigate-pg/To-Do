const fs = require('fs');

let saveToDo = (todo) => {

    fs.writeFile('./db/to-do.json', todo, (err) => {
        if (err) throw err;
    });
}

let readToDo = () => {
    let data = '[]';
    try {
        data = require('../db/to-do.json');
    } catch (error) {
        data = [];
    }
    return data;
}

module.exports = {
    saveToDo,
    readToDo
}