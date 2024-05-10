import React from 'react'
//Hooks!
import HookUseEffetc from '../components/HookUseEffetc'
import HookUseReducer from '../components/HookUseReducer'
import HookUseState from '../components/HookUseState'
import HookUseRef from '../components/HookUseRef'
import HookUseCallback from '../components/HookUseCallback'
import HookUseMemo from '../components/HookUseMemo'
import HookUseLayoutEffect from '../components/HookUseLayoutEffect'
import HookUseImperativeHandle from '../components/HookUseImperativeHandle'
import HookCustom from '../components/HookCustom'
//Context! 
import { useContext } from 'react'
import { SomeContext } from '../components/HookUseContext'






const Home = () => {
  //consumindo o contexto
  const {contextValue} = useContext(SomeContext)
  return (
    <div>
      <h1>Home</h1>
        <HookUseState />
        <HookUseReducer />
        <HookUseEffetc />
        <h2>useContext</h2>
        <p>Valor do Context: {contextValue}</p>
        <hr />
        <HookUseRef />
        <HookUseCallback />
        <HookUseMemo />
        <HookUseLayoutEffect />
        <HookUseImperativeHandle />
        <HookCustom />
    </div>
  )
}

export default Home
