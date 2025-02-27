import express from 'express'
import { crearProducto, mostrarProductos, mostrarProducto, editarProducto, eliminarProducto } from '../controllers/ControllerProducto.js';

const productoRouter = express.Router();


productoRouter.post('/', crearProducto)
productoRouter.get('/', mostrarProductos)
productoRouter.get('/:id', mostrarProducto)
productoRouter.get()


export default productoRouter