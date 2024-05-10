//Importação de alguns hooks pra fazer a funcionabilidade do useLayoutEffect
//Esse Hook é muito situacional
import { useLayoutEffect, useEffect, useState } from "react"

const HookUseLayoutEffect = () => {
    const [nome, setNome] = useState("Algum valor")
    useEffect(() => {
        console.log(2)
        setNome("Mudou de Nome")
    }, [])
    //Lembrando que mesmo sem com o useEffect indo pra baixo do useLayoutEffect, o hook useLayoutEffect sempre vai ser executado primeiro.
    useLayoutEffect(() =>{
        console.log(1)
        setNome("Outro Nome")
    }, [])
    //Vamos observar que o useEffect é muito melhor pra ser usado

    console.log(nome)
  return (
    <div>
      <h1>useLayoutEffect</h1>
      <p>{nome}</p>
      <hr />
    </div>
  )
}

export default HookUseLayoutEffect
