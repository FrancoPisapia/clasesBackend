const productArrayList =['cebolla', 'papa']

console.log(productArrayList)

productArrayList[0]='zapallo'

console.log(productArrayList);

const productList = [
    {
        title:'lechuga',
        price: '$10'
    },
    {
        title:'lechuga',
        price: '$20'
    }
]

console.log(productList);
productList[0].title = 'zapallo'

console.log(productList);

const calculoAreaRectangulo =(a,b) => (a*b)

console.log(calculoAreaRectangulo(5,3));

;
const mostrarLista =(list) =>{
    if (list.length === 0){
        console.log('Lista Vacia')
    } else {
        list.forEach(element => {
           console.log(element)
        });
    }
}
let array2= ['caca']

mostrarLista(array2)

//Clases

class User {
    name = 'Nathan';
    surname = 'Nathan';
    static role = 'Admin';

    constructor (name,surname)
    {

        this.name = name;
        this.surname = surname
    }

    getUser(){
        return this.name
    }
}

const user1 = new User ('Alfonso');
const user2 = new User ('Graciela');

console.log(user1)
console.log(user2)
console.log(User.role);

User.role = 'Operator';

console.log(user1.surname)