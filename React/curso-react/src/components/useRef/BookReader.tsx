import { useRef, useState } from "react";

export const BookReader = () => {
    const currentPageRef = useRef<number>(1)
    const [currentPage, setCurrentPage] = useState<number>(1)

    const nextPage = () => {
        currentPageRef.current += 1
        console.log(`Avanzaste a la página ${currentPageRef.current}`)
    }

    const previusPage = () => {
        if(currentPageRef.current === 1){
            console.log(`No se puede retroceder porque ya estás en la página ${currentPageRef.current}`)
            return
        }
        currentPageRef.current -= 1
        console.log(`Retrocediste a la página ${currentPageRef.current}`)
    }

    const goToPage = (page: number) => {
        if(page < 1){
            console.log(`No se puede saltar a la página ${page}`)
            return
        }
        setCurrentPage(page)
        currentPageRef.current = page
        console.log(`Saltaste a la página ${currentPageRef.current}`)
    }

    return(
        <div>
            <h2>Lectura del libro</h2>
            <p>Pagina actual: ${currentPageRef.current}</p>
            <p>Paginal actual [STATE]: ${currentPage}</p>
            <button onClick={previusPage}>Página anterior</button>
            <button onClick={nextPage}>Página anterior</button>
            <button onClick={() => {goToPage(20)}}>Saltar a la página 20</button>
        </div>
    )
    
}