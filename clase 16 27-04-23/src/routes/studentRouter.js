import express from 'express';
import { studentModel } from '../models/students.js';
import e from 'express';


const app = express();
const stuentRouter = express.Router();
app.use(express.urlencoded({extended:true}))


stuentRouter.get ('/',async (req,res)=>{
 try{
    let students = await studentModel.find();
    res.send({result:'seccess',payload:students})
 }
 catch (e)
 {
    console.log(`cannot get users with mongoose ${e}`)
 }


});

stuentRouter.post('/',async (req,res)=>{
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


stuentRouter.put('/:sid/:cid', async (req,res)=>{
   const {sid,cid} = req.params

   let student = await studentModel.find({_id:sid})
   console.log(student)
   
   
   
   
   
   
   // let student = await studentModel.findOne({_id:sid})

   // if(student){
   // const result = await studentModel.updateOne(
   // {_id:sid},
   // {$push:{courses :cid}})
   // //student.courses.push({course:"644820eb9125ed71fe26a4fb"});
   // console.log('Viene por aca')
   // };

   res.send({status:'syuccess',payload:student})
})


export default stuentRouter