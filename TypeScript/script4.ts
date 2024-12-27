class Persona{
    names ?: string
    apellidoPaterno ?: string
    apellidoMaterno ?: string
    age ?: number

    constructor(name: string, apellidoPaterno: string, apellidoMaterno: string, age: number){
        this.names = name,
        this.apellidoPaterno = apellidoPaterno,
        this.apellidoMaterno = apellidoMaterno,
        this.age = age
    }

    nombrePersona(){
        console.log(`La persona se llama ${this.names}`)
    }
}

const persona1 = new Persona("Fer","León","García",16)
const persona2 = new Persona("Erick","Romero","Ramos",16)

console.log(persona1)
console.log(persona2)