// const http = require ('http');

// const server =http.createServer((request, response) =>{
//     response.end('Hola mundo desde el backend')
// })

// server.listen(8080,() =>{
//     console.log('Listening on port 8080')
// })

const express = require('express');

const app = express();


app.get('/saldudo', (req, res) =>{
    res.send('Hola desde express') //respnde a la peticion con el contenido
});

//Actividad de clase
app.get('/bienvenida', (req, res) =>{
    res.send('<p style="color:blue;">Bienvenido/a!</p>') //respnde a la peticion con el contenido
})

const usuario = {
    nombre: 'Juan',
    apellido: 'Pérez',
    edad: 35,
    correo: 'juan.perez@example.com'
  };

app.get('/usuario', (req, res) =>{
    res.send(usuario) 
})





// Definiendo reqParams

app.get('/unparametro/:nombre',(req,res) =>{
    console.log(req.params.nombre);
    res.send(`Bienvenido ${req.params.nombre}`)
})

app.get('/dosparametros/:nombre/:apellido',(req,res) =>{

    res.send(`El nombre completo es ${req.params.nombre} ${req.params.apellido}`)
})


//Caso practico

const usuarios = [{
    id:'1',
    nombre: 'Juan',
    apellido: 'Pérez',
    edad: 35,
    correo: 'juan.perez@example.com'
  },
  {
    id:'2',
    nombre: 'Maria',
    apellido: 'Pérez',
    edad: '27',
    correo: 'Maria.perez@example.com'
  },

];




// app.get('/',(req,res) =>{

//     res.send({usuarios})
// })

// app.get('/:idUsario',(req,res) =>{

//     let idUsario = req.params.idUsario;

//     let usuario = usuarios.find(us => us.id === idUsario)

//     if(!usuario) {return res.send('Usuario no encontrado')}
    
//     res.send({usuario})
// })


//Ejemplo querys

//Para que funcione tengo que comentar el anterior

app.use(express.urlencoded({extended:true}))//Mejora la interpretacioin de datos


app.get('/ejemploQueries',(req,res) =>{

    let consultas = req.query //No se especfica que

    let {nombre,apellido,edad} = req.query //desectructuramos para limitar la búsqueda
    
    res.send(consultas)
})


app.listen(8080,() => console.log('Servidor arriba en el puerto 8080'))