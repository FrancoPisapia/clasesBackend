import express from "express";
import handlebars from 'express-handlebars'
import __dirname from './utils.js';
import userRouters from './routes/userRouters.js'
import {Server} from 'socket.io';
import mongoose from "mongoose";

const app = express();

const httpserver = app.listen(8080,()=> console.log('Listening on port 8080'))

mongoose.connect('URL', (error)=>{
    if(error){
        console.log('Cannot connect to database');
        process.exit()
    }
})

const socketServer = new Server (httpserver)
app.engine('handlebars', handlebars.engine());

app.set('views',__dirname+'/views');
app.set('view engine', 'handlebars')
app.use(express.static(__dirname+'/public'))
app.use('/',userRouters);



// let messages =[];
// socketServer.on('connection',socket =>{
//     console.log('Nuevo cliente conectado');

//     socket.on ('message', data =>{
//         messages.push(data);
//         socketServer.emit('messageLogs',messages)
//     });

//     socket.on('login', (user) => {
//         console.log(`El usuario ${user} se ha conectado`);
//         socket.user = user;
//         socket.emit('messageLogs', messages);
//         socket.broadcast.emit('userConnected', user);
//     });


// })