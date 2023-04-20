import express from 'express';
import { studentModel } from '../models/studentModels.js';
import e from 'express';


const app = express();
const router = express.Router();
app.use(express.urlencoded({extended:true}))


router.get ('/',async (req,res)=>{
 try{
    let students = await studentModel.find();
    res.send({result:'seccess',payload:students})
 }
 catch (e)
 {
    console.log(`cannot get users with mongoose ${e}`)
 }


});

router.post('/',async (req,res)=>{
   //Primero obtenemos los datos ssegún lo definido en schema
   let {firstName,lastName,age,dni,assigment,note} =req.body;
   //Evaluamos existencia de los parámetros
   if(!firstName||!lastName||!age || !dni || !assigment || !note) return res.send({status:'error', error:'Incomplete values'});
   //Si todo está OK le pedimos a mongoose que inserte el nuevo documento;

   let result = await studentModel.create({
      firstName,
      lastName,
      age,
      dni,
      assigment,
      note
   });

   res.send({status:'success',payload:result})
});


router.put('/:uid', async (req,res)=>{
   let {uid} = req.params;

   let studentToReplace = req.body;
   if(!studentToReplace.first_name || !studentToReplace.last_name || !studentToReplace.email){
      return res.send({status:'error',error : "Complete all values"});
   };
   let result= await studentModel.updateOne ({_id:uid},studentToReplace);
   res.send({status:'success', payload:result})
});

router.delete ('/:uid', async (req,res)=>{
   let {uid} = req.params;
   let result = await studentModel.deleteOne({_id:uid});
   res.send({status:'success', payload:result})
})

export default router