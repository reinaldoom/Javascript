// Funcion Precio de Productos con o sin Descuento
const precioProducto = () => {
    let precioUnitario = 0;
    let cantidadProductos = 0;
  
    // Validar la entrada del usuario
    while (precioUnitario <= 0 || isNaN(precioUnitario)) {
      precioUnitario = parseFloat(prompt("Ingrese el precio unitario del producto:"));
      if (isNaN(precioUnitario)) {
        console.log("Debe ingresar un número válido mayor a 0 y NO una letra o espacio en blanco");
      } else if (precioUnitario <= 0) {
        console.log("El precio unitario debe ser un número mayor a cero");
      }
    }
  
    while (cantidadProductos <= 0 || isNaN(cantidadProductos)) {
      cantidadProductos = parseInt(prompt("Ingrese la cantidad de productos que desea comprar:"));
      if (isNaN(cantidadProductos)) {
        console.log("Debe ingresar un número válido mayor a 0 y NO una letra o espacio en blanco");
      } else if (cantidadProductos <= 0) {
        console.log("La cantidad de productos debe ser un número entero mayor a cero");
      }
    }
  
    //Calcular el precio total de la compra
    const calcularPrecioTotal = () => {
      const precioTotal = precioUnitario * cantidadProductos;
  
      // Condicional para aplicar descuento según el monto de la compra
      if (precioTotal >= 100 && precioTotal < 500) {
        return precioTotal * 0.9; // Aplicar descuento del 10%
      } else if (precioTotal >= 500) {
        return precioTotal * 0.8; // Aplicar descuento del 20%
      } else {
        return precioTotal; // No aplicar descuento
      }
    };
  
    // Llamada a la función para calcular el precio total
    const precioTotal = calcularPrecioTotal();
  
    // Mostrar el resultado al usuario
    console.log(`Precio unitario: $${precioUnitario}`);
    console.log(`Cantidad de productos: ${cantidadProductos}`);
    console.log(`Precio total: $${precioTotal}`);
  };
  
  // Llamar a la función del precioProducto
  precioProducto();