import { useRef } from "react";

export const FocusInput = () => {
    const InputRef = useRef<HTMLInputElement>(null)

    const handleButtonClick = () => {
        if(!InputRef.current){
            console.log("No existe referencia al elemento")
            return
        }

        InputRef.current.focus()
    }

    return (
        <div>
        <input ref={InputRef} type="text" placeholder="Escribe algo aquí..."/>
        <button onClick={handleButtonClick}>Enfocar en el input</button>
        </div>
    )
}