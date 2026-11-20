function calcularPresupuesto() {
    const invitados = Number(document.getElementById("numero-inv").value);
    const costoComida = Number(document.getElementById("cost-comida").value);
    const costoBebida = Number(document.getElementById("cost-bebida").value);
    const costoDecoracion = Number(document.getElementById("cost-decor").value);
    const costoMusica = Number(document.getElementById("cost-musica").value);
    const porcentajePropina = Number(document.getElementById("propina-porc").value);
    const campos = [
        "numero-inv",
        "cost-comida",
        "cost-bebida",
        "cost-decor",
        "cost-musica",
        "propina-porc"
    ];
    const filas = document.querySelectorAll("tbody tr");

    if (campos.some((id) => document.getElementById(id).value.trim() === "")) {
        alert("Completa todos los campos para calcular el presupuesto.");
        return;
    }

    if (!Number.isInteger(invitados) || invitados <= 0) {
        alert("El número de invitados debe ser un entero mayor que cero.");
        return;
    }

    const costos = [costoComida, costoBebida, costoDecoracion, costoMusica, porcentajePropina];
    if (costos.some((valor) => !Number.isFinite(valor) || valor < 0)) {
        alert("Los costos y el porcentaje de propina deben ser valores válidos y no negativos.");
        return;
    }

    const totalComida = invitados * costoComida;
    const totalBebida = invitados * costoBebida;
    const subtotal = totalComida + totalBebida + costoDecoracion + costoMusica;
    const propina = subtotal * (porcentajePropina / 100);
    const totalGeneral = subtotal + propina;
    const costoPorInvitado = totalGeneral / invitados;
    const formatoMoneda = new Intl.NumberFormat("es-CO", {
        style: "currency",
        currency: "COP",
        maximumFractionDigits: 2
    });
    const valores = [
        totalComida,
        totalBebida,
        costoDecoracion,
        costoMusica,
        subtotal,
        propina,
        totalGeneral,
        costoPorInvitado
    ];

    valores.forEach((valor, indice) => {
        filas[indice].children[1].textContent = formatoMoneda.format(valor);
    });
}
