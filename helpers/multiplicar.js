const fs = require('fs')

const colors = require('colors')

const tablaMultiplicar = async (num = 5, listar = false, hasta = 10) => {

    try {
    
        let salida = ''
        let consola = ''
    
        for (let i = 1; i <= hasta; i++) {
    
            let resultado = num * i
            salida += `${num} * ${i} = ${resultado}\n`
            consola += `${num} ${'*'.cyan} ${i} ${'='.yellow} ${resultado}\n`
        }
        if (listar) {
            
            console.log('=============='.red)
            console.log(colors.blue(`Tabla de ${num}`))
            console.log('=============='.red)

            console.log(consola)
        }
    
    
        fs.writeFileSync(`./salida/tabla-${num}.txt`, salida)
    
        return (`tabla-${num}.txt`)

    } catch (error) {
        throw error
    }

}

module.exports = {
    tablaMultiplicar
}