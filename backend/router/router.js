import express from "express";
import { crearProducto, mostrarProductos, actializarProducto, buscarUnProducto, eliminarProducto } from "../controller/productoController.js";


const router = express.Router();


router.post('/', crearProducto);
router.get('/', mostrarProductos);
router.put('/:id', actializarProducto);
router.get('/:id', buscarUnProducto);
router.delete('/:id', eliminarProducto);


export default router;