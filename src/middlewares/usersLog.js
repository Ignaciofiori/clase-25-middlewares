const fs= require("fs")
const path = require("path")

function userLogMiddleware(req,res,next){
    //const fecha = new Date()
    const hoy = new Date()
    const fecha = hoy.toLocaleDateString()
    const logUserPath = path.join(__dirname,"../../database/userLogs.txt")
    const message = `${fecha} - El usuario ingreso a la ruta: ${req.path}\n`

fs.appendFileSync(logUserPath, message)

next()

}


module.exports= userLogMiddleware