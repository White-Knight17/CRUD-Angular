import Producto from "../model/producto.model.js";

export const crearProducto = async (req, res) => {

    try {

        let producto;
        producto = new Producto(req.body);

        await producto.save();
        res.send(producto);
        console.log('Exito!');

    } catch (error) {

        console.log(error);
        res.status(500).send('Error al crear el producto')
    }

}


//Funcion que trae todos los datos en una lista en forma de json hahah puto 

export const mostrarProductos = async (req, res) => {

    try {
        //creo una constante que me busque TODOS LOS DATOS de productos
        const lista = await Producto.find();
        res.json(lista);

    } catch (error) {
        console.log(error);
        res.status(500).send('No hay lista disponible')
    }
}


export const actializarProducto = async (req, res) => {

    try {
        const { nombre, categoria, ubicacion, precio } = req.body;

        let producto = await Producto.findById(req.params.id);

        if (!producto) {
            console.log('Error de id');
            res.status(404).json({ msg: 'No exite el producto ' });
        }

        producto.nombre = nombre;
        producto.categoria = categoria;
        producto.ubicacion = ubicacion;
        producto.precio = precio;

        producto = await Producto.findOneAndUpdate({ _id: req.params.id }, producto, { new: true });
        console.log('Modificacion fue todo un exito');
        res.json(producto);

    } catch (error) {
        console.log(error);
        res.status(500).send('No hay lista disponible')

    }

}

export const buscarUnProducto = async (req, res) => {

    try {
        let producto = await Producto.findById(req.params.id);

        if (!producto) {
            console.log('Error');
            res.status(404).json({ msg: "HAHAHA que idiotaa" });
        }

        res.json(producto);
    } catch (error) {
        res.status(500).send('No hay ningun producto para eliminar/mostrar');
    }


}

export const eliminarProducto = async (req, res) => {
    try {

        let producto = await Producto.findById(req.params.id);

        if (!producto) {
            console.log('Error de id');
            res.status(404).json({ msg: 'No exite el producto' });
        }

        producto = await Producto.findOneAndDelete({ _id: req.params.id }, producto, { new: true });
        console.log('Modificacion fue todo un exito');
        res.json({ msg: 'Se elimino exitosamente' });

    } catch (error) {
        console.log(error);
        res.status(500).send('No hay lista disponible')

    }

}