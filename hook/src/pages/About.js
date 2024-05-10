import React from 'react'
//Context! 
import { useContext } from 'react'
import { SomeContext } from '../components/HookUseContext'

const About = () => {
   //consumindo o contexto
   const {contextValue} = useContext(SomeContext)
  return (
    <div>
      <h1>About</h1>
      <h2>useContext</h2>
        <p>Valor do Context: {contextValue}</p>
        <hr />
    </div>
  )
}

export default About
