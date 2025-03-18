export interface Event {
    id: number;
    nombre: string;
    categoria: string;
    fechaInicio: Date;
    fechaFin: Date;
    precio: number;
    comision: number;
    moneda: string;
    limiteParticipantes: number;
    gratis: boolean;
    estado: string;
    idUsuarioOrganizador: number;
    tipoJuego: string;
  }