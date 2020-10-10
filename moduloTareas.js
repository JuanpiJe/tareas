const fs = require("fs")
const listaTareas = JSON.parse(fs.readFileSync('./tareas.json', 'utf-8' ))

let moduloTareas = {
    traerArrayTareas: function (){
        return listaTareas
    }

}