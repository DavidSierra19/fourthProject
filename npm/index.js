"use strict"
//Se asigna lo traido de modulo de express
const express = require("express");
// 
const servidor = express();

/* servidor.get("/xxx", (solicitud, respuesta)=>{
    respuesta.redirect(301, "https://bit.institute/");
    }) */

//servidor.get
servidor.get("/", (solicitud, respuesta)=>{
    respuesta.json({
        saludo: "hola"
    })
});

servidor.listen(3000);
console.log("Servidor corriendo en el puerto 3000");
