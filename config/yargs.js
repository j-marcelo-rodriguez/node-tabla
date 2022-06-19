const argv = require('yargs')
    .option('n', {
        alias: 'num',
        type: 'number',
        demandOption: true,
        describe: 'Tabla de multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla en consola'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Delimita la tabla de multiplicar'
    })
    .check((argv, options) => {
        if (isNaN(argv.num)) {
            throw 'Ingresa un número'
        } else {
            return true
        }
    })
    .argv

module.exports = argv