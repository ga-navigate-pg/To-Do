const argv = require('./config/yargs').argv;
const operations = require('./operations');






let command = argv._[0];

switch (command) {
    case 'list':
        let todolist = operations.list();
        console.log('################# TO-DO LIST #########################'.green);

        for (let todo of todolist) {
            console.log(`ID:${todo.id}  | To do: ${ todo.description} | Completed: ${todo.completed}`);
        }
        console.log('######################################################'.green);
        break;
    case 'create':
        let todocreated = operations.create(argv.description);
        console.log(todocreated);
        break;
    case 'update':
        let todo2U = operations.update(argv.id, argv.description, argv.completed);
        console.log(todo2U);
    default:
        console.log("Unknow command");
        break;
}