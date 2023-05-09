import express from "express";
import handlebars from 'express-handlebars'
import __dirname from './utils.js';

import {Server} from 'socket.io';
import mongoose from "mongoose";
import cookieParser from 'cookie-parser';
import session from 'express-session';
// import FileStore from 'session-file-store';
import MongoStore from 'connect-mongo'
import userRouter from "./routes/userRouter.js";
import { isValidPassword } from "./utils.js";
import passport from 'passport'
import initializePassport from './config/passport.config.js'

const app = express();
// const fileStore = FileStore(session)

const httpserver = app.listen(8080,()=> console.log('Listening on port 8080'))

const enviroment = async () =>{
  await mongoose.connect('mongodb+srv://francopisapia405:uPTbiSDQYTlKc3wm@codercluster.xlmgp1b.mongodb.net/?retryWrites=true&w=majority');
  

  
  try {
    console.log('Connected to database')

    // let orders = await orderModel.paginate({size:'medium'},{limit:20,page:1})
    // console.log(orders)
  }
  catch (e){
    console.log(`Error connecting to database: ${e}`);
  }
}
enviroment();



const socketServer = new Server (httpserver)
app.engine('handlebars', handlebars.engine());

app.use(express.json());
app.set('views',__dirname+'/views');
app.set('view engine', 'handlebars')
app.use(express.static(__dirname+'/public'));
app.use('/api/user',userRouter);
// app.use('/api/courses',coursesRouter);


//**********COOKIES *******/
app.use(cookieParser());


//**** Con fileSistema en pc ****/


// app.use(session({
//   //ttl: Vida de la sesión
//   //Retries: Tiempo de veces que el servidor tratará de leer el archivo
//   store:new fileStore({path:'./sessions',ttl:100,retries:0}),
//   secret: 'secretCoder',
//   //Resave mantiene la sesión activa, de estar en false está morirá en caso de que exista inactividad
//   resave:false,
//   //saveUnitialized permite guardar cualquier sesión. De estar en false la sesión no se guardará si está vacio el objeto final
//   saveUninitialized:true
// }))

//**** Con Mongo****/


app.use(session({
    store: MongoStore.create({
    mongoUrl:"mongodb+srv://francopisapia405:uPTbiSDQYTlKc3wm@codercluster.xlmgp1b.mongodb.net/?retryWrites=true&w=majority",
    mongoOptions:{useNewUrlParser:true,useUnifiedTopology:true},
    ttl:15
  }),
  secret:"asd3ñc3okasod",
  //Resave mantiene la sesión activa, de estar en false está morirá en caso de que exista inactividad
  resave:false,
  //saveUnitialized permite guardar cualquier sesión. De estar en false la sesión no se guardará si está vacio el objeto final
  saveUninitialized:false
}));

initializePassport();
app.use(passport.initialize());
app.use(passport.session())

app.post('/login', passport.authenticate('login',{failureRedirect:'/faillogin'}),async (req,res)=>{
  if(!req.user) return res.status(400).send({status:'error', error:'Invalid credentials'});

  req.session.user ={
     firts_name : req.user.firts_name,
     last_name:req.user.last_name,
     email: req.user.email,
     gender:req.user.gender,
  }
  res.send({status:'Succeed', payload: req.session.user});
})

app.get('/faillogin',(req,res)=>{
  res.send({error:'Failed Login'})
})


