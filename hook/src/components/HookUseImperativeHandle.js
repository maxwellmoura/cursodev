//Nesse Hook so precisamos usar o useRef
import {useRef} from 'react'
import SomeComponent from './SomeComponent'

const HookUseImperativeHandle = () => {
    //fazendo a refenrencia de um input
    const componentRef = useRef()
  return (
    <div>
      <h2>useImperativeHandle</h2>
      {/* Consumundo a referencia, mas a gente so pode consumir ela fowardRef */}
      <SomeComponent ref={componentRef} />
      {/* Esse Botão vai validar o input referenciado 
       Esse validate é a referencia do input no elemento filho 
      Quando colocamos apenas 2 caracteres o sistema nao acotece nada,
      mas quando colocamos mais 3 ele limpar o input*/}
      <button onClick={() => componentRef.current.validate()}>Validate</button>
      <hr />
    </div>
  )
}

export default HookUseImperativeHandle
