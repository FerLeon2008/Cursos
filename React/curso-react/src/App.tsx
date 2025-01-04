//import { useState } from 'react'
import {BookReader, FocusInput, PhoneBook, ShoppingCart} from './components'
//import { useFetch } from './hooks'
//import { GlobalProvider } from './context/global.provider'
import './App.css'

/*
//7ma clase
const url = 'https://api.example/data'

interface Data {
  name: string;
  lastname : string;
  age: number;
}
*/

function App() {
  /*
  //7ma clase
  const {data, loading, error} = useFetch<Data>(url)

  if(loading)<div>Cargando...</div>
  if(error)<div>UPS!, hay un error: {error.message}</div>
  
  return(
    <div>{JSON.stringify(data)}</div>
  )
  */

  //8va clase
  /*
  const handleClick = () =>{
    console.log("Uy pilluelo, me tocaste")
  }
  
  const dimeHola = () =>{
    alert("hola!!")
  }

  const submit = () => {
    console.log("submitted")
  }
  */

  //1ra clase
  /*
  const [count, setCount] = useState(0)
  const countMore = () => {
    setCount((count) => count+1)
  }
  */
  return (
    /*
   //11va clase 
    <GlobalProvider>
      <ColorRed><Button parentMethod={dimeHola}>My label</Button></ColorRed>
      <Button parentMethod = {handleClick}>My button normal</Button>

      <AppForm>
        <button type='submit' onClick={submit}></button>
      </AppForm>
    </GlobalProvider>
    */
    <>
      <BookReader/>
      <FocusInput/>
      <ShoppingCart/>
      <PhoneBook/>
    </>
  )
}

export default App