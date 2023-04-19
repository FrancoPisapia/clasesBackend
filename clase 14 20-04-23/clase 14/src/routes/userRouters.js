import express from 'express';
import { userModel } from '../models/userModels';
import e from 'express';


const app = express();
const router = express.Router();
app.use(express.urlencoded({extended:true}))


router.get ('/',async (req,res)=>{
 try{
    let users = await userModel.find();
    res.send({result:'seccess',payload:users})
 }
 catch (e)
 {
    console.log(`cannot get users with mongoose ${e}`)
 }


});

router.post('/',async (rea,res)=>{
   //Primero obtenemos los datos ssegún lo definido en schema
   let {first_name,last_name,email} =req.body;
   //Evaluamos existencia de los parámetros
   if(!first_name||!last_name||!email) return res.send({status:'error', error:'Incomplete values'});
   //Si todo está OK le pedimos a mongoose que inserte el nuevo documento;

   let result = await userModel.create({
      first_name,
      last_name,
      email
   });
   res.send({status:'syuccess',payload:result})
});


router.put('/:uid', async (req,res)=>{
   let {uid} = req.params;

   let userToReplace = req.body;
   if(!userToReplace.first_name || !userToReplace.last_name || !userToReplace.email){
      return res.send({status:'error',error : "Complete all values"});
   };
   let result= await userModel.updateOne ({_id:uid},userToReplace);
   res.send({status:'success', payload:result})
});

router.delete ('/:uid', async (req,res)=>{
   let {uid} = req.params;
   let result = await userModel.deleteOne({_id:uid});
   res.send({status:'success', payload:rsult})
})

export default router