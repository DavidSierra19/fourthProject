import { Router } from "express";
import ControladorLociones from "../controladores/controladorLociones.js"

const enrutadorLociones = Router();

enrutadorLociones.post("/", ControladorLociones.crearLocion);

enrutadorLociones.get("/:id",ControladorLociones.leerLocion);

enrutadorLociones.get("/", ControladorLociones.leerLociones)

enrutadorLociones.put("/:id", ControladorLociones.actualizarLocion);

enrutadorLociones.delete("/:id", ControladorLociones.EliminarLocion);

export default enrutadorLociones;