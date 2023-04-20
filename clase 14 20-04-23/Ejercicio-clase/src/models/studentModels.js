import mongoose from 'mongoose';

const studentsCollection = 'estudiantes';

const studentSchema = new mongoose.Schema({
    //Propiedades que querramos que tenga el usuario en nuestra base de datos
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    age: { type: Number, required: true },
    dni: { type: String, required: true, unique: true },
    assigment: { type: String, required: true },
    note: { type: Number, required: true }
});

//Con mongoose model generamos el modelo funcional de usuarios conectados a la base de datos , la parte del cuerpo es el userSchema, pero el userModel refiere a la parte funcional

export const studentModel = mongoose.model(studentsCollection,studentSchema);

