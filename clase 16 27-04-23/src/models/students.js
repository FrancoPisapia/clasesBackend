import mongoose from 'mongoose';

const studentCollection = 'students';

const studentSchema = new mongoose.Schema({
    //Propiedades que querramos que tenga el usuario en nuestra base de datos
    first_name:String,
    last_name:String,
    email:{
        type:String,
        unique:true
    },
    gender:String,
    courses:{
        type:[
            {
                course:{
                    type:mongoose.Schema.Types.ObjectID,
                    ref:'courses'
                }
            }
        ],
        default:[]
    }
});


studentSchema.pre('find', function (){
    this.populate('courses.course');
})

//Con mongoose model generamos el modelo funcional de usuarios conectados a la base de datos , la parte del cuerpo es el userSchema, pero el userModel refiere a la parte funcional

export const studentModel = mongoose.model(studentCollection,studentSchema);