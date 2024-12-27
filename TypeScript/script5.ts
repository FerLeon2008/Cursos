class Sorteo<T> {
    private ticket ?: T;

    constructor(
        private nombre : string
    ){}

    setTicket(ticket: T){
        this.ticket = ticket
    }

    getTicket(){
        return this.ticket
    }

    public sortear() :string{
        return `Para ${this.nombre} el ticket es: ${this.ticket}`
    }
}

let participante1 = new Sorteo<number>("Fer")
participante1.setTicket(7)
console.log(participante1.sortear)