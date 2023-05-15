//Importar módulos
const express = require('express')
const app = express()
const path = require('path') //Rutas
const hbs = require('hbs')

const puerto = 8082

//Servidor de contenido estático
app.use(express.static('public'))

//Configuración del directorio de las vistas hbs
app.set('views', path.join(__dirname + '/public/views'))
app.set('view engine', 'hbs') //Motor de plantilla

//Configuración del directorio que guardará los archivos partial hbs
hbs.registerPartials(__dirname + '/public/views/partials');

app.get('/', (req, res)=>{
    res.render('home',{
        titulo: 'Home',
        nombre: 'Camilo Perez'
    })
    //res.write('home')
    //res.end()
})

app.listen(puerto, ()=>{
    console.log(`Escuchando por el puerto ${puerto}`)
})