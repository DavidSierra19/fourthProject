# Proyecto Base de datos de perfumes

---

### Descripcion del proyecto
Este proyecto backend facilita la gestión de una colección de perfumes, permitiendo a los usuarios:

Almacenar información detallada sobre cada perfume, incluyendo notas olfativas, puntajes y saber si ya se tiene. Visualizar y filtrar la colección de perfumes por diversos criterios. Llevar un registro preciso del inventario de perfumes, identificando fácilmente aquellos que se tienen y los que no.

---

### Lista de procedimiento

1. Crear un nuevo repositorio
2. Instalar Node JS
3. Utilice el comando que esta dentro de los parentesis (npm init) para crear un archivo package.json
4. Ahora instale Express con el siguiente comando (npm install express) 
5. Intalamos mongoose para poder interacturar con node (npm i mongoose)
6. Instalamos morgan para poder tener lo codigos de estados HTTP (npm i morgan)
7. Instalamos dotenv para poder usar la variable de entorno y no subir nuestra key (npm i dotenv)
8. Instalamos nodemon para poder que nuetro porgrama se ejecute automaticamente cuando se realizan cambios (npm i nodemon)
9. Bajar este recuerso y utilizarlo en tu equipo.

---

### Instrucciones de Uso

Para poder usar el proyecto se necestia tener un base de datos en mogoBD en este caso se uso el apartado de ATLAS, pero puedes tener tu base de datos local. tienes que crear un archivo .env donde vas a almacernar tu key con el nombre de (atlasUri=) , ya teniendo lo anterior estaras listo para empezar a crear tus lociones, lo primero que tienes que hacer es hacer correr tu servidor con el comando (npn run dev).

-Para crear una locion puede poner el siguiente comando en postman POST (localhost:3000/lociones) ahora usa el siguiente modelo:

    ejemplo:

    {
        "Nombre": "Jean Paul Gaultier Le Male",
        "FechaLanzamiento": "1995",
        "NotasSalida": "Lavanda, menta, cardamomo, bergamota y abrótano",
        "NotasCorazon": "Canela, flor de azahar del naranjo y alcaravea",
        "NotasFondo": "Vainilla, haba tonka, ámbar, sándalo y cedro",
        "Creador": "Francis Kurkdjian",
        "LaTienes": true,
        "Calificacion": 4.0
    }

-Para ver lo datos de una locion ya creada, puede poner el siguiente comando en postman GET (localhost:3000/lociones/"id")

-Para ver lo datos de todas las lociones ya creada, puede poner el siguiente comando en postman GET (localhost:3000/lociones)

-Para ver actualizar los datos de una locion ya creada, puede poner el siguiente comando en postman PUT (localhost:3000/lociones/"id") ahora dentro de comillas poner el dato y la actualizacion que se desea hacer.

    {
        "Nombre": "Jean Paul Gaultier Le Male",
        "FechaLanzamiento": "1995",
        "NotasSalida": "Lavanda, menta, cardamomo, bergamota y abrótano",
        "NotasCorazon": "Canela, flor de azahar del naranjo y alcaravea",
        "NotasFondo": "Vainilla, haba tonka, ámbar, sándalo y cedro",
        "Creador": "Francis Kurkdjian",
        "LaTienes": true,
        "Calificacion": 4.0
    }

-Para eliminar los datos de una locion ya creada, puede poner el siguiente comando en postman DELETE (localhost:3000/lociones/"id")

Si te apasionan los perfumes y buscas una herramienta para gestionar tu colección de forma eficiente, ¡este proyecto es para ti! Contacta con nosotros para obtener más información o para colaborar en el desarrollo del proyecto.

---

##### Desarrollardor: David Andrey Sierra Moreno: copyright 2024, todos los derechos reservados