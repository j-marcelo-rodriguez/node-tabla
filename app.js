const { tablaMultiplicar } = require('./helpers/multiplicar')
const argv = require('./config/yargs')

require('colors')

console.clear()

console.log(argv)

// console.log(process.argv)
// const [, , arg3] = process.argv
// const [, num = 5] = arg3.split('=')
// console.log(arg3.split('='))

// const num = 5

tablaMultiplicar(argv.num, argv.listar, argv.hasta)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado ok'))
    .catch(err => console.log(err))