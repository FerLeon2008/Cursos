//import { useState } from 'react'
//import {Button} from './components'
import { useFetch } from './hooks'
import './App.css'

const url = 'https://api.example/data'

interface Data {
  name: string;
  lastname : string;
  age: number;
}

function App() {
  const {data, loading, error} = useFetch<Data>(url)

  if(loading)<div>Cargando...</div>
  if(error)<div>UPS!, hay un error: {error.message}</div>
  
  return(
    <div>{JSON.stringify(data)}</div>
  )
  
  /*
  //Primera clase
  const [count, setCount] = useState(0)
  const countMore = () => {
    setCount((count) => count+1)
  }

  return (
    <>
        <Button label={`Count is ${count}`} parentMethod = {countMore} />
    </>
  )
  */  
}

export default App
