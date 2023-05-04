import express from 'express';
import { orderModel } from '../models/orderModel.js';
import e from 'express';


const app = express();
const orderRouter = express.Router();
app.use(express.urlencoded({extended:true}))


// orderRouter.get ('/',async (req,res)=>{
//  try{
//     let order = await studentModel.find();
//     res.send({result:'seccess',payload:students})
//  }
//  catch (e)
//  {
//     console.log(`cannot get users with mongoose ${e}`)
//  }


// });

orderRouter.post('/',async (req,res)=>{
   //Primero obtenemos los datos ssegún lo definido en schema
   let {first_name,last_name,email,gender} =req.body;

   if(!first_name||!last_name||!email || !gender) return res.send({status:'error', error:'Incomplete values'});
   //Si todo está OK le pedimos a mongoose que inserte el nuevo documento;

   let result = await studentModel.create({
      first_name,
      last_name,
      email,
      gender
   });
   res.send({status:'syuccess',payload:result})
});


orderRouter.put('/:sid/:cid', async (req,res)=>{
   const {sid,cid} = req.params

   let student = await studentModel.find({_id:sid})
   console.log(student)

   res.send({status:'syuccess',payload:student})
})


export default stuentRouter