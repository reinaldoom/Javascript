// Clase Producto
class Producto {
    constructor(nombre, precioUnitario, cantidad) {
        this.nombre = nombre;
        this.precioUnitario = precioUnitario;
        this.cantidad = cantidad;
    }

    calcularPrecioTotal() {
        const precioTotal = this.precioUnitario * this.cantidad;
        let descuento = 0;
        if (precioTotal >= 100 && precioTotal < 500) {
            descuento = precioTotal * 0.1; // Descuento del 10%
        } else if (precioTotal >= 500) {
            descuento = precioTotal * 0.2; // Descuento del 20%
        }
        return {
            precioTotal: precioTotal - descuento,
            descuento: descuento,
        };
    }
}

// Funcion para agregar productos
const agregarProductos = () => {
    const productos = [];

    let numProductos;
    while (isNaN(numProductos) || numProductos <= 0) {
        numProductos = parseInt(
            prompt("Ingrese el número de productos que desea agregar:")
        );
        if (isNaN(numProductos) || numProductos <= 0) {
            console.log("Debe ingresar un número válido mayor a 0");
        }
    }

    for (let i = 0; i < numProductos; i++) {
        let nombreProducto = "";
        let precioUnitario = 0;
        let cantidadProductos = 0;

        while (nombreProducto.trim() === "") {
            nombreProducto = prompt(
                `Ingrese el nombre del producto ${i + 1}:`
            ).trim();
            if (nombreProducto === "") {
                console.log("El nombre del producto no puede estar vacío.");
            }
        }

        while (precioUnitario <= 0 || isNaN(precioUnitario)) {
            precioUnitario = parseFloat(
                prompt(`Ingrese el precio unitario del producto ${nombreProducto}:`)
            );
            if (isNaN(precioUnitario)) {
                console.log("Debe ingresar un número válido mayor a 0");
            } else if (precioUnitario <= 0) {
                console.log("El precio unitario debe ser un número mayor a cero");
            }
        }

        while (cantidadProductos <= 0 || isNaN(cantidadProductos)) {
            cantidadProductos = parseInt(
                prompt(`Ingrese la cantidad de productos del producto ${nombreProducto}:`)
            );
            if (isNaN(cantidadProductos)) {
                console.log("Debe ingresar un número válido mayor a 0");
            } else if (cantidadProductos <= 0) {
                console.log("La cantidad de productos debe ser un número entero mayor a cero");
            }
        }

        // Crear un nuevo producto con la clase Producto
        const nuevoProducto = new Producto(nombreProducto, precioUnitario, cantidadProductos);

        // Agregar el producto al array de productos
        productos.push(nuevoProducto);
    }

    return productos;
};

// Llamar a la función de agregarProductos
const productosAgregados = agregarProductos();

// Método para buscar productos por nombre (Búsqueda flexible)
const buscarPorNombre = (nombre) => {
    if (nombre.trim() === "") {
        return [];
    }

    const resultadoBusqueda = productosAgregados.filter(
        (producto) =>
            producto.nombre.toLowerCase().indexOf(nombre.toLowerCase()) !== -1
    );
    return resultadoBusqueda;
};

// Búsqueda de productos por nombre
const nombreBuscado = prompt("Ingrese el nombre del producto que desea buscar:");
const productosEncontrados = buscarPorNombre(nombreBuscado);

if (productosEncontrados.length > 0) {
    console.log("Productos encontrados:");
    productosEncontrados.forEach((producto, index) => {
        console.log(
            `Producto ${index + 1}: ${producto.nombre}, Precio unitario: $${producto.precioUnitario}, Cantidad: ${producto.cantidad}`
        );
        const { descuento } = producto.calcularPrecioTotal();
        console.log(`Descuento aplicado: $${descuento.toFixed(2)}`);
    });
} else {
    console.log("No se encontraron productos con ese nombre.");
}

// Mostrar los productos en la consola y calcular el total a pagar con descuento (Método forEach)
let totalPagarSinDescuento = 0;
let totalDescuento = 0;
let totalPagarConDescuento = 0;

console.log("Productos agregados:");
productosAgregados.forEach((producto, index) => {
    const { precioTotal, descuento } = producto.calcularPrecioTotal();
    console.log(
        `Producto ${index + 1}: ${producto.nombre}, Precio unitario: $${producto.precioUnitario}, Cantidad: ${producto.cantidad}`
    );
    console.log(`Descuento aplicado: $${descuento.toFixed(2)}`);
    totalPagarSinDescuento += producto.precioUnitario * producto.cantidad;
    totalDescuento += descuento;
    totalPagarConDescuento += precioTotal;
}
);

console.log(`Total de todos los productos sin descuento: $${totalPagarSinDescuento.toFixed(2)}`);
console.log(`Descuento total de todos los productos: $${totalDescuento.toFixed(2)}`);
console.log(`Total a pagar de todos los productos con descuento: $${totalPagarConDescuento.toFixed(2)}`);