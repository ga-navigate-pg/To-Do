const argv = require('./config/yargs').argv;
const operations = require('./operations');






let command = argv._[0];

switch (command) {
    case 'list':
        let todolist = operations.list();
        console.log(todolist);
        break;
    case 'create':
        let todocreated = operations.create(argv.description);
        console.log(todocreated);
        break;
    case 'update':
        console.log('Update a to-do');
    default:
        console.log("Unknow command");
        break;
}