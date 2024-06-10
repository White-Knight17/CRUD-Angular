import mongoose from "mongoose";


const ProductSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },

    categoria: {
        type: String,
        required: true
    },

    ubicacion: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },

    fecha_de_creacion: {
        type: Date,
        default: Date.now()
    },

});

export default mongoose.model('Producto', ProductSchema);
