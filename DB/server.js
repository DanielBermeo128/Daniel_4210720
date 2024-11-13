const bodyParser = require('body-parser');
const express = require('express');
const mysql = require('mysql2');

const app = express();
// Configuracion para el uso de peticiones POST
app.use(bodyParser.urlencoded({extended:false}));

// Plantilla dinamicas
app.set('view engine','ejs')

// Crear la conexion a la BD
// Se comprueba la compatibilidad con MariaDB
const db = mysql.createConnection({
    host:       'localhost',
    user:       'root',
    password:   '1234',
    database:   'nombres',
    port:       3306
});

// Comprobacion de la conexion 
db.connect(err=> {
    if(err){
        console.log(`Error en la conexion a la db: ${err}`);
    }else{
        console.log(`La conexion a la base de datos fue exitosa`)
    }
});

// Iniciar servidor
const puerto = 3009;
app.listen(puerto,()=>{
    console.log(`El servidor funciona en : http://localhost:${puerto}`);
});