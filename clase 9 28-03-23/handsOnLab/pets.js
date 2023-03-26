//const express= require('express')

import express from 'express'
const router = express.Router();

let pets = ['perrito'];

router.get('/', (req, res) => {
  res.send(pets);
});

router.post('/', (req, res) => {
  const newPet = req.body;
  pets.push(newPet);
  res.send(newPet);
});

//export {petsRouter}

//export const petsRouter = router
// module.exports = router;
export default router