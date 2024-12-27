let interMaimi: number = 11
let fcDallas: number = 11
let messi: number = 1
let juegaMessi: boolean = true
let palabras: string = "Me emocioné al verlo a Messi"

function jugar(equipo1: number, equipo2: number, juegaMessi: boolean): void {
    let motivo: string = "porque NO juega Messi"
    if(juegaMessi == true){
        interMaimi++
        motivo="porque juega Messi"
    }

    if(equipo1>equipo2) console.log(`Gana el InterMiami ${motivo}`)
    if(equipo1==equipo2) console.log(`Ambos equipos empatan`)
    if(equipo1<equipo2) console.log(`Gana el FC Dallas ${motivo}`)
}

jugar(interMaimi,fcDallas,juegaMessi)