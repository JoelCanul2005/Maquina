const mysql = require('mysql');
//Productos//
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'Joel',
    password: 'hola1',
    database: 'prueba'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('La conexion funciona');
});

exports.consultaProducto = function(productoCodigo) {
    connection.query('SELECT Precio, Cantidad FROM productos WHERE Codigo = ?', [productoCodigo], (err, rows) => {
        if (err) throw err;
        if (rows.length > 0) {
            const precioProducto = rows[0].Precio;
            const cantidadProducto = rows[0].Cantidad;
            console.log('El precio del producto con Codigo', productoCodigo, 'es:', precioProducto);
            console.log('La cantidad del producto con Codigo', productoCodigo, 'es:', cantidadProducto);
        } else {
            console.log('No se encontró ningún producto con el Codigo', productoCodigo);
        }
    });
}
