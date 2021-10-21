// Importaciones
const mongoose = require('mongoose');

//Esquema para la tabla de artículos
const EsquemaArticulo = mongoose.Schema({

    seccion: {
        type: String,
        default: "General",
        required: true
    },

    clase: {
        type: String,
        required: true
    },

    nombre: {
        type: String,
        required: true
    },

    precio_venta: {
        type: Number,
        required: true,
        default: 0
    }

});
//Empalme del esquema con la tabla respectiva en la base de datos
const articulo = (module.exports = mongoose.model("tbArticulos", EsquemaArticulo));