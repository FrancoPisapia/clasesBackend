// Sincrónico
{/*
const fs = require ('fs');

fs.writeFileSync('./ejemplo.txt','Holaaaa estoy en el archivo');


if (fs.existsSync('./ejemplo.txt')){
    let contenido = fs.readFileSync('./ejemplo.txt', 'utf-8')
    console.log(contenido)

    fs.appendFileSync('./ejemplo.txt','Más contenido')

    contenido = fs.readFileSync('./ejemplo.txt', 'utf-8')

    console.log(contenido);

    fs.unlinkSync('./ejemplo.txt')
}
*/}
//Asíncrono
{/*
const fs = require ('fs');

fs.writeFile('./ejemploCallback.txt','Holaaaa desde Callback',(error)=>{

    if(error) return console.log('Error al escribir archivo')

    fs.readFile('./ejemploCallback.txt','utf-8', (error, resultado) =>{

        if(error) return console.log('Error al leer archivo')
        console.log(resultado)

        fs.appendFile('./ejemploCallback.txt','Más Contenido',(error)=>{

            if(error) return console.log('Error al actualizar archivo')

            fs.readFile ('./ejemploCallback.txt','utf-8', (error, resultado)=>{
                if(error) return console.log('Error al leer archivo')
                console.log(resultado)
            })
        })
    })
});
*/ }

//Ejercicio
{/*
const fs = require ('fs');

const today = new Date();

fs.writeFile('./fecha.txt',`${today}`,(error)=>{

    if(error) return console.log('Error al escribir archivo')

    fs.readFile('./fecha.txt','utf-8',(error,resultado)=>{

        if(error) return console.log('Error en lectura')
        console.log(resultado)
    })
});
 */}

// Ejemplo con promesas

const fs = require ('fs');

const operacionesAsincronicas = async() =>{

    await fs.promises.writeFile('./ejemploPromesas.txt', 'Hola soy una promesa')

    let resultado = await fs.promises.readFile('./ejemploPromesas.txt','utf-8')
    console.log(resultado)

    await fs.promises.appendFile('./ejemploPromesas.txt','Más contenido')

    resultado = await fs.promises.readFile('./ejemploPromesas.txt','utf-8')
    console.log(resultado);

    await fs.promises.unlink('./ejemploPromesas.txt')
}

operacionesAsincronicas()


//Json Operation
{/*
const users = [
    {
        name:'Nahuel',
        surname:'Martinez'
    },
    {
        name:'Sara',
        surname:'Perez'
    }
]

console.log(users)

const userJsonStringify = JSON.stringify(users)
console.log(userJsonStringify)
console.log(JSON.parse(userJsonStringify))
*/}


// const randomNum = Math.floor(Math.random() * 20) + 1;
// console.log(randomNum);


