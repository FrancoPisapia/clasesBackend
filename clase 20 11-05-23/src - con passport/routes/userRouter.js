import express from 'express';
import userModel from '../models/usersModel.js'
import e from 'express';
import { createHash, isValidPassword } from '../utils.js';
import { isValidObjectId } from 'mongoose';
import session from 'express-session';
import passport from 'passport'

const app = express();
const userRouter = express.Router();
app.use(express.urlencoded({extended:true}))


//*******PASSPORT *********/

userRouter.post('/register', passport.authenticate('register',{failureRedirect:'/failregister'}),async (req,res)=>{
   res.send({status:'Success', message:'User Registered'})
});

userRouter.get('/failregister',async (req,res)=>{
   console.log('Failed Strategy')
   res.send({error:'Failed'})
})


//NO ANDA POR EL SESSION

// userRouter.post('/login', passport.authenticate('login',{failureRedirect:'/faillogin'}),async (req,res)=>{
//    if(!req.user) return res.status(400).send({status:'error', error:'Invalid credentials'});

//    req.session.user ={
//       firts_name : req.user.firts_name,
//       last_name:req.user.last_name,
//       email: req.user.email,
//       gender:req.user.gender,
//    }
//    res.send({status:'Succeed', payload: req.session.user});
// })

// userRouter.get('/failllogin',(req,res)=>{
//    res.send({error:'Failed Login'})
// })





//*******VIEJO *********/
// userRouter.post('/register',async (req,res)=>{
//    //Primero obtenemos los datos ssegún lo definido en schema
//    let {first_name,last_name,email,gender,password} =req.body;

//    if(!first_name||!last_name||!email || !gender) return res.send({status:'error', error:'Incomplete values'});
//    //Si todo está OK le pedimos a mongoose que inserte el nuevo documento;

//    let result = await userModel.create({
//       first_name,
//       last_name,
//       email,
//       gender,
//       password:createHash(password)
//    });
//    res.send({status:'syuccess' })
// });

// userRouter.get('/login', async (req,res) =>{
//    let {email, password} = req.body;

//    if(!email || !password) return res.status(400).send({status:'Error', error:'Incomplete Values'});

//    const user = await userModel.findOne({email:email},{email:1,first_name:1,last_name:1,password:1});

//    if (!user)return res.status(400).send({status:'Error',error:"User not found"});

//    if(!isValidPassword (user,password)) return res.status(403).send({status:'Error',error:'Incorrect Password'});

//    delete user.password; //Retirar la constraseña

//    req.session.user = user;
   
//    res.send({status:'Success', payload:user})
// })


// userRouter.put('/:sid/:cid', async (req,res)=>{
//    const {sid,cid} = req.params

//    let student = await userModel.find({_id:sid})
//    console.log(student)

//    res.send({status:'syuccess',payload:student})
// })


export default userRouter