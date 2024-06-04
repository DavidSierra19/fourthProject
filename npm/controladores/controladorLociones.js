import ModeloLociones from "../modelos/modeloLociones.js";

const ControladorLociones = {
    crearLocion: async (solicitud, respuesta) => {
      try{
        //if (solicitud.body.nombre === "") throw new error("Falta nombre");
        const nuevaLocion = new ModeloLociones(solicitud.body);
        const locionCreada = await nuevaLocion.save();
        if(locionCreada._id){
          respuesta.json({
            resultado: "bien",
            mensaje: "Locion creada",
            datos: locionCreada 
          });
        }
      } catch (error){
        respuesta.json({
          resultado: "mal",
          mensaje: "ocurrio un error al crear locion",
          datos: error 
        });
      }
    },
    leerLocion:  async (solicitud, respuesta) => {
      try{
        const locionEncontrada = await ModeloLociones.findById(solicitud.params.id);
        if(locionEncontrada._id){
          respuesta.json({
            resultado: "bien",
            mensaje: "Locion leida",
            datos: locionEncontrada
          });
        }
      } catch (error){
        respuesta.json({
          resultado: "mal",
          mensaje: "ocurrio un error al buscar locion",
          datos: error
        });
      }
    },
    leerLociones: async (solicitud, respuesta) => {  
      try{
        const todosLasLociones = await ModeloLociones.find();
            respuesta.json({
            resultado: "bien",
            mensaje: "Lociones leidas",
            datos: todosLasLociones
          });
      } catch (error){
        respuesta.json({
          resultado: "mal",
          mensaje: "ocurrio un error al buscar todas las lociones",
          datos: error
        });
      }
    },
    actualizarLocion: async (solicitud, respuesta) => {
      try{
        const locionActualizada = await ModeloLociones.findByIdAndUpdate(
          solicitud.params.id,
          solicitud.body
        )
        if(locionActualizada._id){
          respuesta.json({
            resultado: "bien",
            mensaje: "Locion Actualizada",
            datos: locionActualizada._id
          });
        }
      } catch (error){
        respuesta.json({
          resultado: "mal",
          mensaje: "ocurrio un error al actualizar locion",
          datos: error
        });
      }
    },
    EliminarLocion: async (solicitud, respuesta) => {
      try{
        const locionEliminada = await ModeloLociones.findByIdAndDelete(solicitud.params.id);
        if(locionEliminada._id){
          respuesta.json({
            resultado: "bien",
            mensaje: "locion eliminadas",
            datos: locionEliminada 
          });
        }
      } catch (error){
        respuesta.json({
          resultado: "mal",
          mensaje: "ocurrio un error al eliminar locion",
          datos: error
        });
      }
    }
}

export default ControladorLociones;