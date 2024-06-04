import mongoose from "mongoose";


mongoose.connect(process.env.atlasUri).then((dato)=>{
    console.log("Bien conectado a la base de datos");
}).catch((error)=>{
    console.log("Mal, ocurrio un error y no se conceto a la base de datos")
})
 