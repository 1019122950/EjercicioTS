import { EventRepository } from "./repositories/EventRepository";
import { Event } from "./models/Event";
import { printEvents } from "./utils/printEvents";

// Crear una instancia del repositorio
const eventRepo = new EventRepository();

// Agregar 3 eventos
eventRepo.add({
  id: 1,
  nombre: "FIFA",
  categoria: "Internacional",
  fechaInicio: new Date("2025-03-17"),
  fechaFin: new Date("2025-03-17"),
  precio: 25,
  comision: 5,
  moneda: "USD",
  limiteParticipantes: 10,
  gratis: false,
  estado: "Activo",
  idUsuarioOrganizador: 123,
  tipoJuego: "Deportes"
});

eventRepo.add({
    id: 2,
    nombre: "Call of Duty",
    categoria: "Internacional",
    fechaInicio: new Date("2025-03-17"),
    fechaFin: new Date("2025-03-17"),
    precio: 100,
    comision: 5,
    moneda: "USD",
    limiteParticipantes: 30,
    gratis: false,
    estado: "Activo",
    idUsuarioOrganizador: 123,
    tipoJuego: "Acción"
});

eventRepo.add({
    id: 3,
    nombre: "Mario Karts",
    categoria: "Nacional",
    fechaInicio: new Date("2025-03-17"),
    fechaFin: new Date("2025-03-17"),
    precio: 10,
    comision: 5,
    moneda: "USD",
    limiteParticipantes: 25,
    gratis: false,
    estado: "Activo",
    idUsuarioOrganizador: 123,
    tipoJuego: "Aventura"
});

// Mostrar eventos creados
console.log("Eventos creados:");
printEvents(eventRepo.getAll());

// Eliminar un evento por ID
console.log("Eliminando el evento con ID 1");
eventRepo.deleteById(1);

// Mostrar eventos después de eliminar uno
console.log("Eventos después de la eliminación:");
printEvents(eventRepo.getAll());
