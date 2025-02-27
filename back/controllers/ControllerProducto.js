import Producto from  '../models/ModelProducto.js'

const crearProducto = async (peticion, respuesta) => {
    try {
        await Producto.create(peticion.body)
        respuesta.json({
            message: 'Usuario creado correctamente'
        })
    } catch (error) {
        respuesta.json({
            message: `no se pudo registrar el ususario: ${error}`
        })
    }
}
async function mostrarProductos(peticion, respuesta){
    try {
        const productos = await Producto.findAll()
        respuesta.json(productos)
    } catch (error) {
       respuesta.json({
        message: 'base de datos vacia'
       }) 
    }
} 
const mostrarProducto = async (peticion, respuesta) =>{
    try {
        const producto = await Producto.findOne({where: {id: peticion.params.id}})
        respuesta.json(producto)
    } catch (error) {
        respuesta.json({
            message: `no se pudo registrar el ususario: ${error}`
        })
    }

}
const editarProducto = async (peticion, respuesta) =>{
}
const  eliminarProducto = async (peticion,respuesta) =>{

}

export {
    crearProducto,
    mostrarProductos,
    mostrarProducto,
    editarProducto,
    eliminarProducto
}
