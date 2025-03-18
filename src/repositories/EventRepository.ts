// Es una clase específica que usa Repository pero solo para manejar eventos.

import { Repository } from "./Repository";//EventRepository va a extender (heredar) de Repository<Event>
import { Event } from "../models/Event"; //EventRepository va a trabajar específicamente con eventos, y queremos que almacene solo objetos del tipo Event.

export class EventRepository extends Repository<Event> {} //EventRepository tendrá todas las funciones de Repository<T>
