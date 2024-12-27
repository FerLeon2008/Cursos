type Programador1 = {
    nombre: String,
    edad: number,
    tecnologias: String[],
    isStudent: boolean
}

interface Programador2 {
    nombre: String,
    edad: number,
    tecnologias: String[],
    isStudent: boolean
}

let dev1: Programador1 = {
    nombre: 'Fernando Buenardo',
    edad: 16,
    tecnologias: ['React','React Native', 'MongoDB', 'Spring', 'Spacy', 'TensorFlow'],
    isStudent: true
}

let dev2: Programador2 = {
    nombre: 'Erick Ricardo',
    edad: 16,
    tecnologias: ['React','React Native', 'MongoDB'],
    isStudent: true
}

function enviarCorriculum(dev : Programador2): void{
    console.log(`Este curriculum es de ${dev1.nombre}`)
}

enviarCorriculum(dev1)
enviarCorriculum(dev2)
