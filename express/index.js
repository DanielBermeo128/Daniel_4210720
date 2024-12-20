//routes/index.js
const express =require('express');
const router = express.Router();
const path = require("path");

//Definicion de rutas y sus manejadores
router.get('/',(req,res)=>{
   
    res.sendFile(path.join(__dirname +"/index.html") );
});

router.get('/formulario',(req,res)=>{
    res.sendFile(path.join(__dirname + "/formulario.html"));
});
router.get('/informacion',(req,res)=>{
    res.sendFile(path.join(__dirname + "/about.html"));
});
router.get('/qr',(req,res)=>{
    res.sendFile(path.join(__dirname + "/QR/qr.html"));
});
router.get('/calculadora',(req,res)=>{
    res.sendFile(path.join(__dirname + "/Calculadora/Calculadora.html"));
});
module.exports = router; //Exportamos el enrutador