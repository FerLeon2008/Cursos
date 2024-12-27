"use strict";
let dev1 = {
    nombre: 'Fernando Buenardo',
    edad: 16,
    tecnologias: ['React', 'React Native', 'MongoDB', 'Spring', 'Spacy', 'TensorFlow'],
    isStudent: true
};
let dev2 = {
    nombre: 'Erick Ricardo',
    edad: 16,
    tecnologias: ['React', 'React Native', 'MongoDB'],
    isStudent: true
};
function enviarCorriculum(dev) {
    console.log(`Este curriculum es de ${dev1.nombre}`);
}
enviarCorriculum(dev1);
enviarCorriculum(dev2);
