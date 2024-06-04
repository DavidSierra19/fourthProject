import { Schema, model } from "mongoose";

const esquemaLocion = new Schema (
    {
        Nombre: {type: String, required: true},
        FechaLanzamiento: {type: String, required: true},
        NotasSalida: {type: String, required: true},
        NotasCorazon: {type: String, required: true},
        NotasFondo: {type: String, required: true},
        Creador: {type: String, required: true},
        LaTienes: {type: Boolean, required: true},
        Calificacion: {type: Number, required: true}
    }
)

export default model("Locion", esquemaLocion);