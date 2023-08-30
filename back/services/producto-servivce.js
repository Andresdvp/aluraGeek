const urlProductos="https://fake-api-psi.vercel.app/productos" ;
const urlUsuarios="https://fake-api-psi.vercel.app/usuarios";

//conexion a la base de datos 
const listaProductos = () => fetch(urlProductos).then(respuesta => respuesta.json());

//agregar producto 
const agregarProducto = (imagen, nombre, precio, categoria, cantidad, descripcion) => {
    return fetch(urlProductos, {
        //metodo
        method: "POST",
        //encabezado para que el servicio sepa que archivo va a recibir
        headers: {
            "Content-Type": "application/json"
        },
        //el cuerpo q es un objeto
        body: JSON.stringify({ imagen, nombre, precio, categoria, cantidad, descripcion, id: uuid.v4() })


    })
};


const verUsuarios = () => fetch(urlUsuarios).then(respuesta => respuesta.json());

const crearUsuario= (nombre,apellido,cedula,fechaNacimiento,email,password) => {
    return fetch(urlUsuarios, {
        //metodo
        method: "POST",
        //encabezado para que el servicio sepa que archivo va a recibir
        headers: {
            "Content-Type": "application/json"
        },
        //el cuerpo q es un objeto
        body: JSON.stringify({ nombre,apellido,cedula,fechaNacimiento,email,password, id: uuid.v4() })


    })
};
export const productoServices = {
    listaProductos,
    agregarProducto,


    //usuarios
    verUsuarios,
    crearUsuario,
}