const fs = require("fs")
const process = require("process")
const listaTareas = JSON.parse(fs.readFileSync('./tareas.json', 'utf-8' ))
let comando = process.argv[2]
let estadoAFiltrar = process.argv[3]
let estadoAFiltrarEnProgreso = process.argv[4]
//Listar tareas
switch (comando){
    case 'listar':
        console.log('Estas son todas las tareas que se han registrado hasta la fecha : ')
                console.log ('------------------------------------------------------------------------------')
                for (i = 0; i<listaTareas.length; i++){
                    console.log(`${i+1}. ${listaTareas[i].titulo}`)}
        break;
//Crear tareas
    case 'crear':
        listaTareas.push({
            titulo : process.argv[3],
            estado : 'pendiente'
        })
        JSON.stringify(fs.writeFileSync('./tareas.json', JSON.stringify(listaTareas), 'utf-8'))
        console.log('Tu tarea se ha creado con éxito!')
        break;
//Filtrar tareas
    case 'filtrar':
        switch (estadoAFiltrar){
            case 'pendientes':
            let tareasPendientesFiltradas = listaTareas.filter(function (elemento){
                return elemento.estado == 'pendiente'})
                console.log('Estas son las tareas pendientes: ')
                console.log ('------------------------------------------------------------------------------')
                for (i = 0; i<tareasPendientesFiltradas.length; i++){
                    console.log(`${i+1}. ${tareasPendientesFiltradas[i].titulo}`)}
                break;
            case 'terminadas':
                let tareasTerminadasFiltradas = listaTareas.filter(function (elemento){
                    return elemento.estado == 'terminada'})
                    console.log('Estas son las tareas terminadas: ')
                    console.log ('------------------------------------------------------------------------------')
                    for (i = 0; i<tareasTerminadasFiltradas.length; i++){
                        console.log(`${i+1}. ${tareasTerminadasFiltradas[i].titulo}`)}
                    break;   
            case 'en':
                if (estadoAFiltrarEnProgreso == 'progreso'){
                let tareasEnProgresoFiltradas = listaTareas.filter(function (elemento){
                    return elemento.estado == 'en progreso'})
                    console.log('Estas son las tareas en progreso: ')
                    console.log ('------------------------------------------------------------------------------')
                    for (i = 0; i<tareasEnProgresoFiltradas.length; i++){
                        console.log(`${i+1}. ${tareasEnProgresoFiltradas[i].titulo}`)}
                    }
                break;
            }
            break;
//Tareas inexistentes
    default: 
        console.log('La acción requerida es inexistente')
        break;
    }