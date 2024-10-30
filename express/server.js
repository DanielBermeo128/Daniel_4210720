const express =require('express');
const app = express(); // Crea una instancia de un aplicacion de express
const PORT =3009;//Definimos el puerto que vamos a ocupar

const routes = require('./index');//imoprta las rutas definidas
app.use('/', routes);//usamos las ruras importadas

app.use(express.static('estilos'));
app.use(express.static('Calculadora'));
app.use(express.static('QR'));


//Servidor
// Inicia el servidor y escucha en el puerto especificado
app.listen(PORT,()=>{
 console.log(`El servidor esta en funcionamiento: http://localhost:${PORT}`);
});