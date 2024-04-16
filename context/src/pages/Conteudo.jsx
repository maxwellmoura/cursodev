import React from 'react'
import { useContext } from 'react'
import { CounterContext } from '../context/CounterContext'
import ChangeCounter from "../componentes/ChangeCounter"

const Conteudo = () => {
  const {counter} = useContext(CounterContext)
  return (
    <div>
      <h1>Conteudo</h1>
      <p>Valor do contador: {counter}</p>
      {/*Altearndo o valor do contexto */}
      <ChangeCounter />
    </div>
  )
}
export default Conteudo
