let express = require('express')
let router = express.Router()
let controller = require("../controller/controller")


// router.get("/",controller.loadHome)
router.get("/",controller.loadHome)

router.post("/weather",controller.getWeather)

    


module.exports = {
    router
}

