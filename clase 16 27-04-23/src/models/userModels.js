import mongoose from 'mongoose';

const userCollection = 'usuarios';

const userSchema = new mongoose.Schema({
    //Propiedades que querramos que tenga el usuario en nuestra base de datos
    first_name:String,
    last_name:String,
    email:{
        type:String,
        unique:true
    }
});

//Con mongoose model generamos el modelo funcional de usuarios conectados a la base de datos , la parte del cuerpo es el userSchema, pero el userModel refiere a la parte funcional

export const userModel = mongoose.model(userCollection,userSchema);

