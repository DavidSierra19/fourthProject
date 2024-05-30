const ControladorUsuarios = {
    crearUsuario: async (solicitud, respuesta) => {
      console.log("Solicitud body:", solicitud.body);
      try{
        console.log("Solicitud body",solicitud.body);
        if (solicitud.body.nombre === "") throw new Error("falta nombre");
        respuesta.json({ mensaje: "POST usuario works!" });
      } catch (error){
        console.log("error", error);
        respuesta.json({error: true, mensaje: "Error al crear usuario"})
      }
    },
    leerUsuario:  async (solicitud, respuesta) => {
      try{
        console.log(solicitud.params.id);
        respuesta.json({ mensaje: "GET usuario works!" });
      } catch (error){
        console.log("error", error);
        respuesta.json({error: true, mensaje: "Error al leer usuario"})
      }
    },
    leerUsuarios: async (solicitud, respuesta) => {  
      try{
        respuesta.json({ mensaje: "GET usuarios works!" });
      } catch (error){
        console.log("error", error);
        respuesta.json({error: true, mensaje: "Error al leer todos los usuarios"})
      }
    },
    actualizarUsuario: async (solicitud, respuesta) => {
      try{
        console.log(solicitud.params.id);
        console.log("Solicitud body",solicitud.body);
        respuesta.json({ mensaje: "PUT usuario works!" });
      } catch (error){
        console.log("error", error);
        respuesta.json({error: true, mensaje: "Ocurrio un error al actualziar un usuario"})
      }
    },
    EliminarUsuario: async (solicitud, respuesta) => {
      try{
        console.log(solicitud.params.id);
        respuesta.json({ mensaje: "DELETE usuario works!" });
      } catch (error){
        console.log("error", error);
        respuesta.json({error: true, mensaje: "Ocurrio un error al eliminar un usuario"})
      }
    }
}

export default ControladorUsuarios;

/* const usuario = {
    nombre: "pepita",
    apellido: "Perez",
    email: "pepita@bit",
    telefono: "3114574773",
    ciudad: "Bogota",
    contrasena: "asd",
    genero: "F",
    confirmarContrasena: "asd",
    foto: "https://png.pngtree.com/png-clipart/20230930/original/pngtree-man-wearing-glasses-cartoon-cute-kawaii-anime-illustration-clip-art-character-png-image_13023395.png"
} */

