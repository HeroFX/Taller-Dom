function calcular() {

    const formatoMoneda = new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0,
    });
    
    let varCantidad = parseInt(document.getElementById("cantidad").value);
    let varPrecio = parseFloat(document.getElementById("precio").value);
    let subtotal = varCantidad * varPrecio;
    document.getElementById("subtotal").value = formatoMoneda.format(subtotal);

    let iva = subtotal * 0.19;
    document.getElementById("iva").value = formatoMoneda.format(iva);

    let descuento = subtotal * 0.20;
    document.getElementById("descuento").value = formatoMoneda.format(descuento);

    let total = subtotal + iva  - descuento;
    document.getElementById("total").value = formatoMoneda.format(total);


}