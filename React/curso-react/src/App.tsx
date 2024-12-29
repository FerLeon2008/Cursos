//import { useState } from 'react'
import {AppForm, Button, ColorRed} from './components'
//import { useFetch } from './hooks'
import './App.css'

/*
//Séptima clase
const url = 'https://api.example/data'

interface Data {
  name: string;
  lastname : string;
  age: number;
}
*/

function App() {
  /*
  //Séptima clase
  const {data, loading, error} = useFetch<Data>(url)

  if(loading)<div>Cargando...</div>
  if(error)<div>UPS!, hay un error: {error.message}</div>
  
  return(
    <div>{JSON.stringify(data)}</div>
  )
  */

  //Octava clase
  const handleClick = () =>{
    console.log("Uy pilluelo, me tocaste")
  }
  
  const dimeHola = () =>{
    alert("hola!!")
  }

  const submit = () => {
    console.log("submitted")
  }

  //Primera clase
  /*
  const [count, setCount] = useState(0)
  const countMore = () => {
    setCount((count) => count+1)
  }
  */
  return (
    <>
      <ColorRed><Button parentMethod={dimeHola}>My label</Button></ColorRed>
      <Button parentMethod = {handleClick}>My button normal</Button>

      <AppForm>
        <button type='submit' onClick={submit}></button>
      </AppForm>
    </>
  )
}

export default App