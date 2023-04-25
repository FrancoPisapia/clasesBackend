import express from 'express';
import { courseModel } from '../models/courses.js';
import e from 'express';


const app = express();
const coursesRouter = express.Router();
app.use(express.urlencoded({extended:true}))


coursesRouter.get ('/',async (req,res)=>{
 try{
    let courses = await courseModel.find();
    res.send({result:'seccess',payload:courses})
 }
 catch (e)
 {
    console.log(`cannot get users with mongoose ${e}`)
 }


});

coursesRouter.post('/',async (req,res)=>{
   //Primero obtenemos los datos ssegún lo definido en schema
   let {title,description,difficulty,topics,professor} =req.body;

   if(!title||!description||!difficulty || !topics || !professor) return res.send({status:'error', error:'Incomplete values'});
   //Si todo está OK le pedimos a mongoose que inserte el nuevo documento;

   let result = await courseModel.create({
      title,
      description,
      difficulty,
      topics,
      professor
   });
   res.send({status:'syuccess',payload:result})
});


export default coursesRouter