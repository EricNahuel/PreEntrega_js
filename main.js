// Array de baños químicos
const habitaciones = [
    { cantidad: 2, precio: 200 },
    { cantidad: 3, precio: 300 },
    { cantidad: 4, precio: 400 },
    { cantidad: 5, precio: 500 }
  ];
  
  // Función para buscar el precio de los baños químicos según la cantidad
  function buscarPrecioPorCantidad(cantidad) {
    return habitaciones.find(habitacion => habitacion.cantidad === cantidad)?.precio;
  }
  
  // Función para validar la respuesta "si" o "no"
  function validarRespuestaSiNo(respuesta) {
    return respuesta.toLowerCase() === "si" || respuesta.toLowerCase() === "no";
  }
  
  // Función para validar la cantidad de días
  function validarCantidadDias(dias) {
    return dias > 0 && !isNaN(dias);
  }
  
  function calcularTotal(cantidadhabitacion, dias, serviciosMantenimiento, pagos, tarjetaCuotas) {
    const PRECIOXDIA = 5000;
    let total = 0;
  
    if (validarCantidadDias(dias)) {
      let preciohabitacion = buscarPrecioPorCantidad(cantidadhabitacion);
  
      if (dias > 5) {
        total = dias * 3000;
      } else if (dias > 3) {
        total = dias * 4000;
      } else {
        total = dias * PRECIOXDIA;
      }
  
      if (serviciosMantenimiento === 'si') {
        total += total * 0.1;
      }
  
      if (cantidadhabitacion >= 10) {
        total -= total * 0.1;
      }
  
      if (pagos === 'no' && tarjetaCuotas > 3 && tarjetaCuotas <= 6) {
        const RECARGO = total * 0.05;
        total += RECARGO;
      }
  
      return total;
    } else {
      return null;
    }
  }
  
  function obtenerInputNumero(id) {
    const valor = parseInt(document.getElementById(id).value);
    return isNaN(valor) ? null : valor;
  }
  
  function obtenerInputTexto(id) {
    return document.getElementById(id).value.trim();
  }
  
  function obtenerCheckbox(id) {
    return document.getElementById(id).checked;
  }
  
  function mostrarResultado(total) {
    const resultadoElement = document.getElementById("resultado");
    resultadoElement.textContent = total !== null ? "Total a pagar: $" + total : "Debes ingresar un número válido de días.";
  }
  
  function validarFormulario() {
    const cantidadhabitacion = obtenerInputNumero("cantidadhabitacionInput");
    const dias = obtenerInputNumero("diasInput");
    const serviciosMantenimiento = obtenerInputTexto("serviciosMantenimientoInput");
    const pagos = obtenerInputTexto("pagosInput");
    const tarjetaCuotas = obtenerInputNumero("tarjetaCuotasInput");
  
    if (cantidadhabitacion >= 2 && !isNaN(cantidadhabitacion) && validarCantidadDias(dias) && validarRespuestaSiNo(serviciosMantenimiento) && validarRespuestaSiNo(pagos)) {
      const total = calcularTotal(cantidadhabitacion, dias, serviciosMantenimiento, pagos, tarjetaCuotas);
      mostrarResultado(total);
    } else {
      alert("Por favor, ingresa valores válidos en los campos.");
    }
  }
  
  document.getElementById("calcularButton").addEventListener("click", validarFormulario);
  