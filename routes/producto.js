// Rutas para el producto
const express = require('express')
const router = express.Router()
const productoController = require('../controllers/productoController')

// Se estan definiendo rutas para que sean accedidas o consumidad por nombre principal api

// Para crear un nuevo producto
router.post('/', productoController.crearProducto)

// Para obtener todos los productos
router.get('/', productoController.obtenerProductos)

// Para actualizar un producto por ID
router.put('/:id', productoController.actualizarProducto)

// Para obtener un producto por su ID
router.get('/:id', productoController.obtenerProductoById)

// Para eliminar un producto por su ID
router.delete('/:id', productoController.eliminarProducto)

module.exports = router