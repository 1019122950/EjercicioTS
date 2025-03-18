import { Event } from "../models/Event";

export function printEvents(events: Event[]): void {
  events.forEach(event => {
    console.log(`ID: ${event.id}`);
    console.log(`Evento: ${event.nombre}`);
    console.log(`Categoría: ${event.categoria}`);
    console.log(`Fecha Inicio: ${event.fechaInicio.toISOString()}`);
    console.log(`Fecha Fin: ${event.fechaFin.toISOString()}`);
    console.log(`Precio: ${event.precio} ${event.moneda}`);
    console.log(`Comisión: ${event.comision}`);
    console.log(`Participantes: ${event.limiteParticipantes}`);
    console.log(`Tipo de Juego: ${event.tipoJuego}`);
    console.log(`Gratis: ${event.gratis ? "Sí" : "No"}`);
    console.log(`Estado: ${event.estado}`);
    console.log(`ID Organizador: ${event.idUsuarioOrganizador}`);
    console.log("\n"); // Agregar un espacio en blanco entre eventos
  });
}
