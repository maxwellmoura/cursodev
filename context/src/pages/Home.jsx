//import { useContext } from "react"
import ChangeCounter from "../componentes/ChangeCounter"
//import {CounterContext} from "../context/CounterContext"
// Refatorando
import { useCounterContext } from "../hooks/useCounterContext"

//Contexto Complexo
import { useTituloCorContexto } from "../hooks/useTituloCorContexto"


const Home = () => {
  //const {counter} = useContext(CounterContext)
  const {counter} = useCounterContext()
  const {color, dispatch} = useTituloCorContexto()

  const setTituloCor = (color) => {
    dispatch({type: color})
  }

  // Conteto Complexo

  return (
    <div>
      <h1 style={{color: color}}>Home</h1>
      <p>Valor do contador: {counter}</p>
      {/*Altearndo o valor do contexto */}
      <ChangeCounter />
 
    </div>
  )
}

export default Home
