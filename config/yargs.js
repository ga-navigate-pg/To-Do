// const opts = {

const { demandOption } = require('yargs');

// }
const argv = require('yargs')
    .command('list', 'list of to-do')
    .command('create', 'Create a to-do', {
        description: {
            alias: 'd',
            demandOption: true,
            desc: 'Describe the to-do'

        }
    })
    .command('update', 'Update a to-do', {
        description: {
            alias: 'd',
            demandOption: true,
            desc: 'Update a to-do'
        },
        completed: {
            alias: 'c',
            demandOption: true,
            desc: 'Complete flag On/Off',
            default: false
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}