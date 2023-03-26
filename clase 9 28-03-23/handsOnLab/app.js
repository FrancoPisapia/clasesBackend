
//const express= require('express')

//const usersRouter= require('./users.js');
//const petsRouter= require('./pets.js');

import express from 'express'
const app = express();
import usersRouter from './users.js';
import petsRouter from './pets.js';

app.use(express.json());
app.use('/api/users', usersRouter);
app.use('/api/pets', petsRouter);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));