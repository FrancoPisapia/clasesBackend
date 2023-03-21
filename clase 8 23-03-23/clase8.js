const express = require('express')

const app =express();
const server = app.listen(8080,()=>console.log("Listening on Port 8080"));

app.use(express.json()); //Permite recibir JSON
app.use(express.urlencoded({extended:true}))//Enviar info desde la URL

let users =[];

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

app.delete('/api/user/:name',(req,res) =>
{
    let name = req.params.name;
    let currentLength = users.length
    users = users.filter(user => user.first_name != name);
    if(users.length === currentLength)
    {
        return res.status(404).send({status:'error',error:'User not found'})
    }
})


