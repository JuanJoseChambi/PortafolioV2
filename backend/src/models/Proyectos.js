const mongoose = require("mongoose")

const proyectoSchema = new mongoose.Schema({
    imagenes:{
        type: String
    },
    titulo: {
        type: String,
        required: true,
        // unique:true //que sea unico 
    },
    descripcion: {
        type: String,
        required:true
    },
    duracion: {
        type: String,
        required: true
    },
    front: {
        type: String
    },
    backend: {
        type: String
    },
    db: {
        type: String
    },
    github: {
        type: String
    },
    web: {
        type: String
    }
})

const proyecto = mongoose.model("proyecto", proyectoSchema)

module.exports = proyecto