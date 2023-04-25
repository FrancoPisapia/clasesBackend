import express from "express";
import handlebars from 'express-handlebars'
import __dirname from './utils.js';
import stuentRouter from './routes/studentRouter.js'
import coursesRouter from "./routes/coursesRouter.js";
import {Server} from 'socket.io';
import mongoose from "mongoose";

const app = express();

const httpserver = app.listen(8080,()=> console.log('Listening on port 8080'))

const enviroment = async () =>{
  await mongoose.connect('mongodb+srv://francopisapia405:uPTbiSDQYTlKc3wm@codercluster.xlmgp1b.mongodb.net/?retryWrites=true&w=majority');
  try {
    console.log('Connected to database')
  }
  catch (e){
    console.log(`Error connecting to database: ${e}`);
  }
}
enviroment();

// mongoose.connect('mongodb+srv://francopisapia405:uPTbiSDQYTlKc3wm@codercluster.xlmgp1b.mongodb.net/?retryWrites=true&w=majority', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log('Connected to database'))
//   .catch((err) => console.log(`Error connecting to database: ${err}`));



const socketServer = new Server (httpserver)
app.engine('handlebars', handlebars.engine());

app.use(express.json());
app.set('views',__dirname+'/views');
app.set('view engine', 'handlebars')
app.use(express.static(__dirname+'/public'))
app.use('/api/student',stuentRouter);
app.use('/api/courses',coursesRouter);



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