import express from "express";
import handlebars from 'express-handlebars'
import __dirname from './utils.js';

const app = express();

//Inicializamos el motor

app.engine('handlebars', handlebars.engine());

//utilzamos app set (vie,ruta) indicamos las partes del proyeto que estarán en vista;

app.set('views',__dirname+'/views');

//Finalmente  con app set (view engine, handlebars) indicamos que el motor especificado arriba es el que queremos utilizar 

app.set('view engine', 'handlebars')

//seteamos de manera estática nuestra carpeta públic

app.use(express.static(__dirname+'/public'))

const users = [
	{
		nombre: 'Juan',
		apellido: 'Pérez',
		edad: 30,
		correo: 'juan@example.com',
		telefono: '123456789'
	},
	{
		nombre: 'María',
		apellido: 'Gómez',
		edad: 25,
		correo: 'maria@example.com',
		telefono: '987654321'
	},
	{
		nombre: 'Pedro',
		apellido: 'Sánchez',
		edad: 35,
		correo: 'pedro@example.com',
		telefono: '555555555'
	},
	{
		nombre: 'Luis',
		apellido: 'Martínez',
		edad: 40,
		correo: 'luis@example.com',
		telefono: '777777777'
	},
	{
		nombre: 'Ana',
		apellido: 'García',
		edad: 28,
		correo: 'ana@example.com',
		telefono: '999999999'
	}
];


app.get ('/',(req,res)=>{
    const index = Math.floor(Math.random() * 5);

    const user = users[index];

    res.render('index',user)
});

const server = app.listen(8080,()=> console.log('Listening on port 8080'))