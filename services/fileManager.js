const fs = require('fs');

let saveToDo = (todo) => {

    fs.writeFile('./db/to-do.json', todo, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
}

let readToDo = () => {
    let data
    try {
        data = require('../db/to-do.json');
    } catch (error) {
        console.log(error);
        data = [];
    }
    return data;
}

module.exports = {
    saveToDo,
    readToDo
}