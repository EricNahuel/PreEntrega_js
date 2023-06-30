function calcularTotal(cantidadhabitacion, dias, serviciosdelimpieza, pagos, tarjetaCuotas) {
    const PRECIOXDIA = 5000;
    let total = 0;

    if (dias > 0 && !isNaN(dias)) {
        if (dias > 5) {
            total = dias * 3000;
        } else if (dias > 3) {
            total = dias * 4000;
        } else {
            total = dias * PRECIOXDIA;
        }

        if (serviciosdelimpieza === 'si') {
            total += total * 0.1;
        }

        if (cantidadhabitacion >= 10) {
            total -= total * 0.1;
        }

        if (pagos === 'no') {
            if (tarjetaCuotas > 3 && tarjetaCuotas <= 6) {
                const RECARGO = total * 0.05;
                total += RECARGO;
            }
        }

        return total;
    } else {
        return null;
    }
}

let cantidadhabitacion = 0;
let validInput = false;

while (!validInput) {
    cantidadhabitacion = parseInt(prompt("¿Cuántos habitaciones desea alquilar?"));

    if (cantidadhabitacion >= 1 && !isNaN(cantidadhabitacion)) {
        validInput = true;
    } else {
        alert("La cantidad mínima de habitacion para alquilar es 1. Ingresa un valor válido.");
    }
}

let dias = parseInt(prompt("¿Por cuántos días desea alquilar las habitaciones ?"));
let serviciosdelimpieza = prompt("¿Deseas solicitar servicios de mantenimiento y limpieza? Responde 'si'/'no'.").toLowerCase();
let pagos = prompt("¿Desea pagar en efectivo? Responde 'si'/'no'.").toLowerCase();
let tarjetaCuotas = 1;

if (pagos === 'no') {
    tarjetaCuotas = parseInt(prompt("¿En cuántas cuotas desea pagar? (cantidad máxima de cuotas 6)"));
}

let total = calcularTotal(cantidadhabitacion, dias, serviciosdelimpieza, pagos, tarjetaCuotas);

if (total !== null) {
    let mensaje = "Detalles del presupuesto:\n";
    mensaje += "Cantidad de habitaciones: " + cantidadhabitacion + "\n";
    mensaje += "Duración del alquiler: " + dias + " día(s)\n";
    mensaje += "Servicios de mantenimiento y limpieza: " + (serviciosdelimpieza === 'si' ? "Sí" : "No") + "\n";
    mensaje += "Cuotas para el pago con tarjeta: " + tarjetaCuotas + "\n";
    mensaje += "---------------------------------\n";
    mensaje += "Total a pagar: $" + total;

    alert(mensaje);
} else {
    alert("Debes ingresar un número válido de días.");
}