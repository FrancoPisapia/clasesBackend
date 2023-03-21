
// Ejemplo de Map
let arregloPrueba=[1,2,3,4,5,6];

const miFunctionmap = (arreglo,callback) =>{
    let nuevoArreglo =[];

    for (let i=0; i<arreglo.length;i++){
        let nuevoValor=callback(arreglo[i])
        nuevoArreglo.push(nuevoValor)
    }

    return nuevoArreglo
}

let nuevoArregloPropio = miFunctionmap(arregloPrueba, x=>x*2);
let nuevoArregloConMap= arregloPrueba.map(x=>x*2)

console.log(nuevoArregloPropio)
console.log(nuevoArregloConMap)

//Promesas
