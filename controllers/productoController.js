const Producto = require('../models/Producto')

exports.crearProducto = async (req, res) => {
    try {
        let producto;

        // Estamos creando nuestro producto
        producto = new Producto(req.body)

        await producto.save()
        res.send(producto)
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error en la creacion de producto')
    }
}

exports.obtenerProductos = async (req, res) => {

    try {
        const productos = await Producto.find()
        res.json(productos)

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error en la obtención de los productos')
    }
}

exports.actualizarProducto = async (req, rs) => {
    try {
        const { nombre, categoria, ubicacion, precio } = req.body
        let producto = await Producto.findById(req.params.id)

        if(!producto) {
            res.status(404).json({ msg: 'No existe el producto'})
        }

        producto.nombre = nombre
        producto.categoria = categoria
        producto.ubicacion = ubicacion
        producto.precio = precio
        
        producto = await Producto.findOneAndUpdate({ _id: req.params.id }, producto, { new: true} )
        res.json(producto)
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al actualizar un producto por su ID')
    }
}

exports.obtenerProductoById = async (req, res) => {
    try {
        let producto = await Producto.findById(req.params.id)

        if (!producto) {
            res.status(404).json({ msg: 'No existe el producto por ID'})
        }
        res.json(producto)
    } catch (error) {
        console.log(error)
        res.status(500).send('HUbo un error al obtener el producto por su ID')
    }
}

exports.eliminarProducto = async (req, res) => {
    try {
        let producto = await Producto.findById(req.params.id)

        if (!producto) {
            res.status(404).json({ msg: 'No existe el producto por el ID para eliminarlo'})
        }
        await Producto.findOneAndRemove({ _id: req.params.id })
        res.json({ msg: 'Producto eliminado con exito' })
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al eliminar el producto')
    }
}