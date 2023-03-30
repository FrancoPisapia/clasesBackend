import express from "express";
import handlebars from 'express-handlebars'
import __dirname from './utils.js';
import viewsRouter from './routes/viewsRuter.js'

const app = express();

//Inicializamos el motor

app.engine('handlebars', handlebars.engine());

//utilzamos app set (vie,ruta) indicamos las partes del proyeto que estarán en vista;

app.set('views',__dirname+'/views');

//Finalmente  con app set (view engine, handlebars) indicamos que el motor especificado arriba es el que queremos utilizar 

app.set('view engine', 'handlebars')

//seteamos de manera estática nuestra carpeta públic

app.use(express.static(__dirname+'/public'))


app.use('/',viewsRouter);

const server = app.listen(8080,()=> console.log('Listening on port 8080'))