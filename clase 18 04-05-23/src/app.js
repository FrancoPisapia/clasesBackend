import express from "express";
import handlebars from 'express-handlebars'
import __dirname from './utils.js';

import {Server} from 'socket.io';
import mongoose from "mongoose";
import { orderModel } from "../src/models/orderModel.js";
import { userModel } from "./models/usersModel.js";
import cookieParser from 'cookie-parser';
import session from 'express-session';

const app = express();

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
// app.use('/api/student',stuentRouter);
// app.use('/api/courses',coursesRouter);


//**********COOKIES *******/
app.use(cookieParser('CoderS3Cr3Tc0D3'));

app.get('/setCookie',(req,res) =>{
  res.cookie('CoderCookie', 'Esta es una cookie',{maxAge:10000}).send('Cookie')
})

app.get('/getCookies',(req,res) =>{
  res.send(req.cookies)
})

app.get('/deleteCookie',(req,res)=>{
  res.clearCookie('CoderCookie').send('Cookie removed')
});

app.get('/setSignedCookie',(req,res) =>{
  res.cookie('SignedCookie', 'Esta es una cookie muy poderosa',{maxAge:10000,signed:true}).send('Cookie')
})  


//**** Session ****/

app.use(session({
  secret: 'secretCoder',
  //Resave mantiene la sesión activa, de estar en false está morirá en caso de que exista inactividad
  resave:true,
  //saveUnitialized permite guardar cualquier sesión. De estar en false la sesión no se guardará si está vacio el objeto final
  saveUninitialized:true
}))


app.get('/session',(req,res) =>{
  //Si existe la sesión aumento el contador

  if(req.session.counter){
    req.session.counter++;
    res.send(`Se ha visitado el sitio ${req.session.counter} veces`)
  } else{
    //Si no hay una sesión se inicializa en 1

    req.session.counter =1;
    res.send('Bienvenido')
  }
});

/* Login con session*/

//Middleware
const auth = (req,res,next) =>{
  if(req.session.user ===`pepe`&& req.session.admin){
    return next()
  }
  return res.status(401).send('Authorization error')
}
//Login
app.get ('/login',(req,res) =>{
  const {username,password} = req.query;
  if( username != 'pepe'|| password != 'pepepass'){
    return res.send('Login failed')
  }
  req.session.user = username;
  req.session.admin = true;


  res.send('Login success');
  // auth(req, res, () => {
  //   res.send('Login success');
  // })

})
//Una vez logeado
app.get('/privado', auth, (req,res) =>{
  res.send ('Si estas viendo esto es porque te logueaste')
})

//Logout

app.get ('/logout',(req,res) =>{
  req.session.destroy(err=>{
    if(err){
      return res.json({status:'logout error',body:err})
    }
    res.send('Logout succeed')
  })
})


