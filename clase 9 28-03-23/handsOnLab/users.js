
//const express= require('express')

//const uploader = require('./utils.js');

import express from 'express'
import uploader from './utils.js'
const router = express.Router();

let users = [];

router.get('/', (req, res) => {
  res.send(users);
});

router.post('/',uploader.single('file') ,(req, res) => {
  // if(!req.file){
  //   return res.status(400).send({status:'error',error:'No se pudo guardar la imágen'})
  // }
  console.log(req.file)

  const newUser = req.body;
  //newUser.profile= req.file.path
  users.push(newUser);
  res.send({status:'success',message:'User created', newUser})
});


export default router

