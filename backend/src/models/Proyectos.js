const mongoose = require("mongoose")

const proyectoSchema = new mongoose.Schema({
    // imagenes:{
    //     type: String
    // },
    // titulo: {
    //     type: String,
    //     required: true,
    //     // unique:true //que sea unico 
    // },
    // descripcion: {
    //     type: String,
    //     required:true
    // },
    // duracion: {
    //     type: String,
    //     required: true
    // },
    // front: {
    //     type: String
    // },
    // backend: {
    //     type: String
    // },
    // db: {
    //     type: String
    // },
    // github: {
    //     type: String
    // },
    // web: {
    //     type: String
    // }
    nombre:{
        type:String
    },
    edad:{
        type:Number
    }
}, {timestamps:true})

const Proyecto = mongoose.model("proyecto", proyectoSchema)

module.exports = Proyecto