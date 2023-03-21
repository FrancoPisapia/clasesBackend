const fs = require ('fs');

const { json } = require('stream/consumers');

const packajeJson= fs.readFileSync('./package.json','utf-8')

let jsonObjt = JSON.parse(packajeJson)

const info = {
    contenidoStr: packajeJson,
    contenidoObj: jsonObjt,
    size: fs.statSync('./package.json').size,
  };
  
console.log(info);


const guardarJson = async() =>
{
    try
    {
        await fs.promises.writeFile('./info.json', JSON.stringify(info))

    }
    catch
    {
        throw new Error ('Error reading el package Json')
    }
}

guardarJson()

  