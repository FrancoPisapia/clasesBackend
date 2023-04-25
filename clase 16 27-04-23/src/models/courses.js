import mongoose from 'mongoose';

const courseCollection = 'courses';

const courseSchema = new mongoose.Schema({
    //Propiedades que querramos que tenga el usuario en nuestra base de datos
    title:String,
    description:String,
    difficulty:Number,
    topics:{
        type:Array,
        default:[]
    },
    professor:String,
    students:{
        type:Array,
        default:[]
        }
});

//Con mongoose model generamos el modelo funcional de usuarios conectados a la base de datos , la parte del cuerpo es el userSchema, pero el userModel refiere a la parte funcional

export const courseModel = mongoose.model(courseCollection,courseSchema);