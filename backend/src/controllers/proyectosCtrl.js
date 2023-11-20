const {Router} = require("express");
const Proyecto = require("../models/Proyectos");

const proyectosRouter = Router()

proyectosRouter.get("/", async (req, res) => {
    const allDB = await Proyecto.find({})
    res.status(200).json(allDB)
})  
proyectosRouter
    .route("/:id")
    .get(async (req, res) => {
        const { id } = req.params

        const proyect = await Proyecto.findById(id);
        
        res.status(200).json(proyect)
    })
    .patch((req, res) => {

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