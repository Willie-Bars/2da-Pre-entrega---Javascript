
/* A PARTIR DE LA CONTRUCCION DEL OBJETO "RESERVA" Y SU ALMACENAMIENTO
EN EL ARRAY "RESERVAS" SE REALIZARÁ UN SIMULADOR SENCILLO
PARA REALIZAR RESERVAS DE DIA Y HORA PARA UN ESTUDIO DE GRABACION */


// CONSTRUCTOR CON DATOS DE RESERVA
function Reserva(nombre, fecha, hora) {
    this.nombre = nombre;
    this.fecha = fecha;
    this.hora = hora;
}

// ARRAY PARA ALMACENAR RESERVAS
const reservas = [];

// FUNCION PARA AGREGAR RESERVA
function agregarReserva() {
    const nombre = prompt("Ingrese su nombre:");
    const fecha = prompt("Ingrese la fecha (DD/MM/AAAA):");
    const hora = prompt("Ingrese la hora (HH:MM):");


    // VERIFICAR SI EXISTE RESERVA
    let existe = false;
    for (let i = 0; i < reservas.length; i++) {
        if (reservas[i].fecha === fecha && reservas[i].hora === hora) {
            existe = true;
            break;
        }

    }

    if (existe) {
        alert("Ese horario ya está reservado. Elije otro.");
    } else {

        // SI NO EXISTE SE CREA LA RESERVA   
        const nuevaReserva = new Reserva(nombre, fecha, hora);
        reservas.push(nuevaReserva);
        alert("Reserva creada para " + nombre + " el " + fecha + " a las " + hora + ".");
    }

}

// CONSULTA RESERVAS VIGENTES
function listarReservas() {
    if (reservas.length === 0) {
        alert("No hay reservas registradas.");
    } else {
        console.log("Listado de reservas:");
        console.table(reservas);
    }
}

// MENU DE RESERVAS
function menu() {
    let opcion;

    do {
        opcion = prompt(
            "Seleccione una opción: 1. Agregar reserva - 2. Listar reservas - 3. Salir"
        );

        switch (opcion) {
            case "1":
                agregarReserva();
                break;
            case "2":
                listarReservas();
                break;
            case "3":
                alert("Has salido del menu de reservas");
                break;
        }
    } while (opcion !== "3");
}

menu();