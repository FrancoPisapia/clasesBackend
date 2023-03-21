const objetos =[
    {
        manzanas:3,
        peras:2,
        carne:1,
        jugos:5,
        dulce:2
    },
    {
        manzanas:1,
        sandias:1,
        huevos:6,
        jugos:1,
        panes:4
    }
]

//const newList = objetos.map((value ) =>Object.keys(value))

//const newList1 = Object.keys(objetos[0]);
//const newList2 = Object.keys(objetos[1]);
//console.log(newList1);


//const newList3 = [...newList1,...newList2];
//console.log(newList3)

const comprado = [...Object.values(objetos[0]),...Object.values(objetos[1])]
console.log(comprado);

const suma = comprado.reduce((total, num) => total+num,0);

console.log(suma)




