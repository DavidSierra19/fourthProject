import mongoose from "mongoose";

mongoose.connect("mongodb+srv://dsierra:dams0416-@cluster0.yfjfgjr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then((dato)=>{
    console.log("Bien conectado a la base de datos");
}).catch((error)=>{
    console.log("Mal, ocurrio un error y no se conceto a la base de datos")
})
