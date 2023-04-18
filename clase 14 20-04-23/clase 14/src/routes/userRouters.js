import express from 'express';
import { userModel } from '../models/userModels';

const router = express.Router();



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

export default router