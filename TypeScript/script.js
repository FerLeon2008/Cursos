"use strict";
let interMaimi = 11;
let fcDallas = 11;
let messi = 1;
let juegaMessi = true;
let palabras = "Me emocioné al verlo a Messi";
function jugar(equipo1, equipo2, juegaMessi) {
    let motivo = "porque NO juega Messi";
    if (juegaMessi == true) {
        interMaimi++;
        motivo = "porque juega Messi";
    }
    if (equipo1 > equipo2)
        console.log(`Gana el InterMiami ${motivo}`);
    if (equipo1 == equipo2)
        console.log(`Ambos equipos empatan`);
    if (equipo1 < equipo2)
        console.log(`Gana el FC Dallas ${motivo}`);
}
jugar(interMaimi, fcDallas, juegaMessi);
