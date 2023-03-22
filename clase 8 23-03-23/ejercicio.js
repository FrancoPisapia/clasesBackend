import express from 'express'

const app =express();
const server = app.listen(8080,()=>console.log("Listening on Port 8080"));

app.use(express.json()); //Permite recibir JSON
app.use(express.urlencoded({extended:true}))//Enviar info desde la URL

const fraseInicial = 'Frase inicial'


app.get('/api/frase',(req,res)=>
{
    
    res.send(fraseInicial)
});

app.get('/api/frase/:pos',(req,res)=>
{
    const palabras = fraseInicial.split(' ');

    const pos= req.params.pos -1;

    if (pos >= 0 && pos < palabras.length) {
        const buscada = palabras[pos];
        res.send({ buscada });
      } else {
        res.status(400).json({ error: 'Posición inválida' });
      }
});

app.post('/api/palabra', express.json(), (req, res) => {
    //const { palabra } = req.body;
    const palabra = 'palabra'
    //const palabra = req.params.palabra
    let frase = 'Frase inicial';
    const palabras = frase.split(' ');
  
    palabras.push(palabra);
    frase = palabras.join(' ');
  
    const pos = palabras.length;
  
    //res.json({ agregada: palabra, pos });
    res.send({status:`agregada: ${palabra}`,frase})
  });

  app.put('/api/palabras/:pos', express.json(), (req, res) => {
    //const { palabra } = req.body;
    const palabra = 'aaaa'
    const pos = req.params.pos - 1;
    let frase = 'Frase inicial';
    const palabras = frase.split(' ');
  
    if (pos >= 0 && pos < palabras.length) {
      const anterior = palabras[pos];
      palabras[pos] = palabra;
      frase = palabras.join(' ');
      //res.send({status:`actualizada: ${palabra}`,frase})
      res.json({ actualizada: palabra, anterior,frase});
    } else {
      res.status(400).json({ error: 'Posición inválida' });
    }
  });

  app.delete('/api/palabras/:pos', express.json(), (req, res) => {
    //const { palabra } = req.body;
    const palabra = 'aaaa'
    const pos = req.params.pos - 1;
    let frase = 'Frase inicial';
    const palabras = frase.split(' ');
  
    if (pos >= 0 && pos < palabras.length) {
      const eliminada = palabras.splice(pos,1)[0] //para que devuelva un objeto el [0]
      frase = palabras.join(' ');
      //res.send({status:`actualizada: ${palabra}`,frase})
      res.json({ eliminada});
    } else {
      res.status(400).json({ error: 'Posición inválida' });
    }
  });
