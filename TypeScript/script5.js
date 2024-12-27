"use strict";
class Sorteo {
    constructor(nombre) {
        this.nombre = nombre;
    }
    setTicket(ticket) {
        this.ticket = ticket;
    }
    getTicket() {
        return this.ticket;
    }
    sortear() {
        return `Para ${this.nombre} el ticket es: ${this.ticket}`;
    }
}
let participante1 = new Sorteo("Fer");
participante1.setTicket(7);
console.log(participante1.sortear);
