import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2'

const orderCollection = 'orders';

const orderSchema = new mongoose.Schema({
    //Propiedades que querramos que tenga el usuario en nuestra base de datos
    name:String,
    size:{
        type:String,
        emun :["small","medium", "large"],
        default:"medium"
    },
    price:Number,
    quantity:Number,
    date:Date,
});

orderSchema.plugin(mongoosePaginate)

//Con mongoose model generamos el modelo funcional de usuarios conectados a la base de datos , la parte del cuerpo es el userSchema, pero el userModel refiere a la parte funcional

export const orderModel = mongoose.model(orderCollection,orderSchema);