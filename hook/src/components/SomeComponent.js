// os imports pra consumo da referencias
import { useRef, useImperativeHandle, forwardRef } from 'react'

//Envolvemos nossa função no foeardRef, onde podemos utilizar props e ref
const SomeComponent = forwardRef((props, ref) => {
  //Outra referencia
  const localInputRef = useRef()
  //Criação de uma função referencia possivel ser executada por meio do nosso elemento pai, temos que colocar nossa função no elemento pai
  useImperativeHandle(ref, () => {
    return {
      validate: () => {
        if (localInputRef.current.value.length >= 3) {
          localInputRef.current.value = ""
        }
      }
    }
  })
  return (
    <div>
      <p>Insira no máximo  3 caracteres</p>
      {/* Aqui nos temos o input sendo referenciado ou validado no useRef */}
      <input type="text" ref={localInputRef} />
    </div>
  )
})

export default SomeComponent
