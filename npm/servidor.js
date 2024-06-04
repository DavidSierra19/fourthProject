//Importo el modulo de express
import express from "express";
import morgan from "morgan";
import enrutadorLociones from "./rutas/rutaLociones.js"
//Creo un servidor y se lo asigno a una constando llamada servidor
const servidor = express();

servidor.use(morgan("dev"))
servidor.use(express.json());
servidor.use("/lociones", enrutadorLociones);
//
servidor.get("/",(solicitud, respuesta) => {
    respuesta.status(404).send("No encontrado");
})

//Exporto los dator guardaos en servidor

export default servidor;