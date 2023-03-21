const moment = require("moment/moment");

const fechaActual = moment()

const fechaDeNacimiento = moment('1997-06-21')
console.log(fechaActual);6

//Validar si la fecha es válida

if(!fechaDeNacimiento.isValid())
{
    console.log('La fecha itroducida es inválida')
} else 
{
    const diasTranscurridos = fechaActual.diff(fechaDeNacimiento,'years');
    console.log(`Han pasado ${diasTranscurridos} años`)
}