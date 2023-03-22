//const express = require('express')
import express from 'express'

const app =express();
const server = app.listen(8080,()=>console.log("Listening on Port 8080"));

app.use(express.json()); //Permite recibir JSON
app.use(express.urlencoded({extended:true}))//Enviar info desde la URL

//let users =[];

let users=[{
    id:1,
    first_name:'Mauricio',
    last_name:'Espinosa',
    age:'35',
    mail:"Mauricio@gmail.com"
}]

app.post('/api/user',(req,res)=>
{
    let user = req.body //Es elJSON que enviará el usuario a la hora de ejecutar la peticion

    if(!user.first_name|| !user.last_name)
    {
        return res.status(400).send({status:'error',error:'Complete all values'})
    }

    users.push(user)
    res.send({status:'success',message:'User created'})
});

//Ejemplo propio
// const data = [
//     { id: 1, name: 'John' },
//     { id: 2, name: 'Jane' },
//     { id: 3, name: 'Bob' }
//   ];



//   app.put('/data/:id', (req, res) => {
//     const id = parseInt(req.params.id);
//     const index = data.findIndex(item => item.id === id);
  
//     if (index !== -1) {
//       data[index].name = req.body.name;
//       res.status(200).send(data[index]); // 200 OK status code for successful PUT and return updated data
//     } else {
//       res.status(404).send('Data not found'); // 404 Not Found status code for data not found
//     }
//   });

// Fijarse

  
app.put('/api/user/:id',(req,res)=>{

    //let user = req.body
    const id = req.params.id;
    const updateUser = users.find((user) => user.id == id)
  
    if (updateUser) {
      
        users= users.filter((us) => us.id !== id)

        //users= req.body.name;
        res.send({status:'success',message:'User updated'}); // 200 OK status code for successful PUT and return updated users
    } else {
      res.status(404).send('users not found'); // 404 Not Found status code for data not found
    }
  });


app.delete('/api/user/:id',(req,res) =>
{
    let id = req.params.id ;

    let currentLength = users.length
    users = users.filter(user => user.id!= id);
    console.log(users)
    if(users.length === currentLength)
    {
        return res.status(404).send({status:'error',error:'User not found'})
    }

    res.send({status:'success',message:'User deleted'})
})




