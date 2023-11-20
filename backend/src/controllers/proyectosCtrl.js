const {Router} = require("express");
const Proyecto = require("../models/Proyectos");

const proyectosRouter = Router()

proyectosRouter.get("/", async (req, res) => {
    const allDB = await Proyecto.find({})
    res.status(200).json(allDB)
})  
proyectosRouter
    .route("/:id") //Route permite hacer para un solo path varios metodos, como en este caso get, patch y delete que nesecitan id
    .get(async (req, res) => {
        const { id } = req.params

        const proyect = await Proyecto.findById(id);

        res.status(200).json(proyect)
    })
    .patch(async (req, res) => { //Patch permite cambiar propiedades especificas y no hacer un cambio completo de todo
        const { id } = req.params
        await Proyecto.findByIdAndUpdate(id, {nombre:"Jose"})
        res.status(200).json({status: "Success"})
    })
    .delete(async (req, res) => {
        const {id} = req.params
        await Proyecto.findByIdAndDelete(id)
        res.status(200).json({status:"success"})
    })

proyectosRouter.post("/", async (req, res) => {
    const proyectoTech  = req.body;
    // console.log(proyectoTech);
    const result = await Proyecto.create(proyectoTech)

    res.status(200).json({ result: "Success", result})
})

proyectosRouter.delete("/", async (req, res) => {

})
proyectosRouter.put("/", async (req, res) => {

})

module.exports = proyectosRouter