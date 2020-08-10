const argv = require('./config/yargs').argv;
const operations = require('./operations');






let command = argv._[0];

switch (command) {
    case 'list':
        let todolist = operations.list();
        console.log('################# TO-DO LIST #########################'.green);
        for (let todo of todolist) {
            console.log(todo.description, ' completed: ', todo.completed);
        }
        console.log('######################################################'.green);
        break;
    case 'create':
        let todocreated = operations.create(argv.description);
        console.log(todocreated);
        break;
    case 'update':
        // let todoupdated = operations.update(argv.description, argv.completed)
    default:
        console.log("Unknow command");
        break;
}