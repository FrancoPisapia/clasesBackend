// let randomNumbers = {}

// for (let i =0; i<2; i++ ){
//     let randomNumber = Math.floor(Math.random()*20)+1

//     if(randomNumbers[randomNumber]){// 
//         randomNumbers[randomNumber]++;
//     } else{
//         randomNumbers[randomNumber] =1;
//     }

// }

// console.log(randomNumbers);



const fs = require('fs').promises;
const crypto = require('crypto');;

class UserManager{

    constructor(){
        this.users =[]
        this.path = 'Usuarios.Json'
    }

    async readUsersFromFile ()
    {
        //Leo el archivo json (si este existe) y parseo la info dentro de el
        try
        {
            const data = await fs.readFile(this.path,'utf-8');
            return this.users = JSON.parse(data)
        } catch (error)
        {
            //console.log( `el archvo ${this.path} no existe, creando...`)
            //await fs.writeFile(this.path, [])
            //return []
            throw new Error ('No puede leerse' + error.message)

        }
    }

    async saveUsersFiles ()
    {
        // Creo el archivo JSON y stringifeo la info del array 
        try 
        {
            await fs.access(this.path);
            fs.writeFile (this.path, JSON.stringify(this.users))
        } 
        catch 
        {
            throw new Error ('No se guardó')
        }
    }

    createUser(us){

        //Verifico que el mismo código no este en uso
        const sameUser = this.users.find(user => user.usuario === us.usuario)

        if(sameUser)
            {
                throw Error ('El usuario ya está en uso')
            }
        //Hasheo la contraseña
        const contraseñaHasheada=crypto.createHash('sha256').update(us.password).digest('hex');
        //us.contraseñaHasheada=contraseñaHasheada;
        us.password=contraseñaHasheada
        return this.users.push({ ...us});
    }

    getUser(){
        return console.log(this.users)
    }


    async validarUsuario(userName,password)
    {
        try
        {
           await this.readUsersFromFile()

            const pas= crypto.createHash('sha256').update(password).digest('hex');
            const userToFind=this.users.find((user)=> user.userName ===  userName && user.password === pas)

           if(userToFind){
            return console.log('Logueado')
           }
        }
        catch (error)
        {
            console.log(`No se puede encontrar el usuario o contraseña ${error.message}`)

        }
        
    }
    
}

const userManager = new UserManager();

const usuario1 = {
    name: 'Carlos',
    surename: 'Perez',
    userName:'pepito',
    password:'caca'

}

const usuario2 = {
    name: 'Carlos',
    surename: 'Perez',
    userName:'pepito',
    password:'caca'

}

userManager.createUser(usuario1);
userManager.getUser()

//userManager.createUser(usuario2);


userManager.saveUsersFiles ()

userManager.validarUsuario("pepito","caca")

