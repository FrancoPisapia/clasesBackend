import express from "express";
import handlebars from 'express-handlebars'
import __dirname from './utils.js';

import {Server} from 'socket.io';
import mongoose from "mongoose";
import { orderModel } from "../src/models/orderModel.js";
import { userModel } from "./models/usersModel.js";

const app = express();

const httpserver = app.listen(8080,()=> console.log('Listening on port 8080'))

const enviroment = async () =>{
  await mongoose.connect('mongodb+srv://francopisapia405:uPTbiSDQYTlKc3wm@codercluster.xlmgp1b.mongodb.net/?retryWrites=true&w=majority');
  

  
  try {
    console.log('Connected to database')
    // // let result = await orderModel.insertMany([
    // //   {name: "Cheese", size: "medium", price:13, quantity:50, date: "2021-03-13T09:13:24Z"},
    // //   {name: "Cheese", size: "large", price:14, quantity:10, date: "2021-03-17T09:22:12Z"},
    // //   {name: "Vegan", size: "small", price:17, quantity:10, date: "2021-03-13T11:21:39.736Z"},
    // //   {name: "Vegan", size: "medium", price:18, quantity:10, date: "2021-03-17T09:22:12Z"},
    // // ])

    //*****AGGREGATE*******

    // let orders = await orderModel.aggregate([
    //   {
    //     //Filtra para que te de solo aquellas que coincidan con el tamaño especificado
    //     $match:{size:"medium"}
    //   },
    //   {
    //     //Agrupa por sabores y acumula el número de ejemplares por sabor
    //     $group:{_id:"$name", totalQuantity:{$sum:"$quantity"}}
    //   },
    //   {
    //     //Ordeno de mayor a menor
    //     $sort:{totalQuantity:-1}
    //   },
    //   {
    //     //Guardamos todo lo de la agregación en un nuev documento dentro del arreglo con el nombre ORDERS
    //     $group:{_id:1, orders:{$push:"$$ROOT"}}
    //   },
    //   {
    //     //Una vez agrupados generamos un nuevo ObjectId, así se guarda sin coincidencias.
    //     $project:{
    //       "_id":0,
    //       orders:"$orders"
    //     }
    //   },
    //   {
    //     //Siempre último paso el merge y el reports
    //       $merge:{
    //         into:"report"
    //     }
    //   }
      
      
    // ])

    //*****PAGINATE*******

    let orders = await orderModel.paginate({size:'medium'},{limit:20,page:1})
    console.log(orders)
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
app.use(express.static(__dirname+'/public'))
// app.use('/api/student',stuentRouter);
// app.use('/api/courses',coursesRouter);


