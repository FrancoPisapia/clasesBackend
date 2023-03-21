{/*
// ES7 Operador ** e includes
let valoresBase = [1,2,3];
let nuevoValores = valoresBase.map ((numero,indice) => numero**indice)

console.log(valoresBase);
console.log(nuevoValores);

let nombres =['Juan','Camilo','Nathan', 'Elizabeth'];

if (nombres.includes("Caca")) 
{
    console.log(`Camilo esta en el array`)
}else {
    console.log(`Nombre no encontrado`)
}
*/}

{/*
// ES8 Object.ENTRIES Object.VALUES Y Object.KEYS

const users ={
    name: 'Nathan',
    adress: 'Av Aca 1122'
}

let paraLlevarValores = Object.entries(users); // Devuelve la propiedad y el valor
console.log(paraLlevarValores);

let soloPropiedades = Object.keys(users);// devuelve el Key
console.log(soloPropiedades);

let soloValues = Object.values(users); // Devuelve los valores
console.log(soloValues);
*/}

// ES9 Spread
{/*}
let object1 ={
    property1 : 2,
    property2 : 'casa',
    property3 : true,
}

let object2 ={
    property1 : 'Hola',
    property5 : [1,2,3,4,5,6],
}

let {property1,property5} = object2;

let object3 ={...object1, ... object2} //Las une y las del último pisan a las propiedades anteriores

//console.log(property1);
//console.log(property5);

console.log(object3)
*/}

//ES 10 Strim.trim() Array.flat() Dynamic Imports
{/*}
let cadena1 ='       hola';

console.log(cadena1.trim());

let mensajes =[];

let messsageIntent ='                        ';

const messsageIntentTrim = messsageIntent.trim();

if( messsageIntentTrim.length>0){
    mensajes.push(messsageIntentTrim )
}else{
    console.log('Mensaje vacio')
}

console.log(mensajes)
let arrayAnidado = [1,2,3,4,5,[56,25,347,48],44,10,[89]];

console.log(arrayAnidado.flat())
*/}

// Es11 nullish y variables privadas
{/*
let variablesDePrueba= 0;

let variablesAsignable = variablesDePrueba || 'sin valor'
console.log(variablesAsignable)
let variablesNullish = variablesDePrueba ?? 'sin valor'
console.log(variablesNullish)

let variablesDePrueba= null;

let variablesAsignable = variablesDePrueba || 'sin valor'
console.log(variablesAsignable)
let variablesNullish = variablesDePrueba ?? 'sin valor'
console.log(variablesNullish)
*/}

class Persona{
    #fullName;// Es una variable privada por tener #

    constructor (nombre, apellido)
    {
        this.nombre = nombre;
        this.apellido = apellido;
        this.#fullName =`${nombre} ${apellido}`
    }
    
    getFullName()
    {
        return this.#fullName;// por un método público
    }
}

const persona = new Persona ('Juan', 'Perez')
console.log(persona);
console.log(persona.nombre)
console.log(persona.getFullName())