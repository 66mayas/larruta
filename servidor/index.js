// Importación de librerías necesarias
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// Definición de constantes

const puerto_be = 1966;//puerto del back-end
const puerto_bd = 27017;//puerto de la base de datos
const urlBD = "mongodb://localhost:"+puerto_bd+"/bdLaRuta";//url de la base de datos

// Creación de la aplicación que controlará el back-end
const appbackend = express();
appbackend.use(cors()); // conectando la aplicación con cors (librería necesaria)
appbackend.use(bodyParser.urlencoded({extended: false})); // conectando la aplicación con body-parser (librería encargada de analizar las peticiones http que llegan del front)
appbackend.use(bodyParser.json());

// Conexión a la base de datos

// establece la ruta de conexión
mongoose.connect(urlBD, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
// se conecta con la base de datos
const dbConexion = mongoose.connection;
// si la base de datos abre
dbConexion.on("open", () => {
    console.log("Conectado a MongoDB por el puerto " + puerto_bd);
});
// si se presenta un error al intentar abrir la base de datos
dbConexion.on("error", (error) => {
    console.log(error)
});

// Se importa el modelo o esquema de la base de datos
const esquemaBD = require("./modelos/esquema_articulo");

// End Points o APIs

//ir al home
appbackend.get("/", (req,res) => {
    res.send("BAR Y BILLARES LA RUTA");
});

//agregar un artículo
appbackend.post("/articulo/agregar", (req, res, next) => {
    //toma los datos del body y los envía a la base de datos mediante el método create() de MongoDB
    esquemaBD.create(req.body, (err, nuevoArticulo) => {
        if(err){
            return next("Hay un error en los datos del artículo y no se puede agregar a su base de datos");
        } else{
            res.json(nuevoArticulo);
        }
    });
});

//listar artículos
appbackend.get("/articulo/listar", (req, res) => {
    esquemaBD.find({}, (err, listaArticulos) => {
        if(err) {
            res.send("Error al obtener la lista de artículos")
        } else{
            res.json(listaArticulos)
        }
    });
});

//Buscar artículos por sección
appbackend.get("/articulo/buscarXseccion/:criterio", (req, res) => {
    esquemaBD.find({seccion: req.params.criterio}, (err, listaArticulos) => {
        if(err) {
            res.send("Error al obtener la lista de artículos")
        } else{
            res.json(listaArticulos)
        }
    });
});
//Buscar artículos por clase
appbackend.get("/articulo/buscarXclase/:criterio", (req, res) => {
    esquemaBD.find({clase: req.params.criterio}, (err, listaArticulos) => {
        if(err) {
            res.send("Error al obtener la lista de artículos")
        } else{
            res.json(listaArticulos)
        }
    });
});
//Buscar artículos por nombre
appbackend.get("/articulo/buscarXnombre/:criterio", (req, res) => {
    esquemaBD.find({nombre: req.params.criterio}, (err, listaArticulos) => {
        if(err) {
            res.send("Error al obtener la lista de artículos")
        } else{
            res.json(listaArticulos)
        }
    });
});

//Actualizar artículos
appbackend.put("/articulo/actualizar/:id", (req, res, next) => {
    esquemaBD.findByIdAndUpdate(
        req.params.id, {$set: req.body}, (err, articuloActualizado) => {
        if(err){
            return next(err);
        } else{
            res.json(articuloActualizado);
            console.log("El artículo " + articuloActualizado.nombre + " se actualizó correctamente")
        }
    });
});

//Eliminar artículos
appbackend.delete("/articulo/quitar/:id", (req, res) => {
    esquemaBD.deleteOne({_id: req.params.id}, (err, articuloEliminado) => {
        if(err){
            res.send("No se pudo eliminar el artículo " + articuloEliminado.nombre);
            console.log(err.message);
        } else{
            res.send("Artículo eliminado");
        }
    });
});

// Inicialización del servidor
appbackend.listen(puerto_be, () => {
    console.log("Servidor Ok, corriendo en el puerto " + puerto_be);
});