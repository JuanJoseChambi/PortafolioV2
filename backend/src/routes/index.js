const { Router } = require("express")
const proyectosRouter = require("../controllers/proyectosCtrl")
const tecnologiasRouter = require("../controllers/tecnologiasCtrl")

const router = Router()

router.use("/proyectos", proyectosRouter)
router.use("/tecnologias", tecnologiasRouter)

module.exports = router









