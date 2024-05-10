//precisamos de um conjunto de hooks pra fazer sentido a sua utilização real
import { useState, useEffect, useMemo } from "react"

const HookUseMemo = () => {
    //Criando variavel pra gente conseguir atualizar o componente
    const [numero, setNumero] = useState(0)
    //Aqui outra variavel com os numeros em string
    // const premiumNumeros = ["0", '100', '200'] <- Ler a OBS
    //Corrigindo o erro da memorie leek usando o useMemo
    const premiumNumeros = useMemo(() =>{
        return ['0', '10', '100', '30', '200']
    }, [])
    // useEffect pra fazer algo quando os priemiumNumeros forem alterados
    useEffect(() =>{
        console.log("Premium Numeros foram alterados")
    }, [premiumNumeros])
  return (
    <div>
      <h1>useMemo</h1>
      {/* Criando a Situação de uso */}
      <input type="text" onChange={(e) => setNumero(e.target.value)} />
      {/* Caso de verificação se eu aceitei algum dos numeros na variavel */}
      {/* Vamos fazer um if ternario caso eu errar nao vai imprimir nada */}
      {premiumNumeros.includes(numero) ? <p>Acertou o Numero!</p> : ''}
      <hr/>
      {/* OBS: used-vars
  Line 8:11:  The 'premiumNumeros' array makes the dependencies of useEffect Hook (at line 12) change on every render. To fix this, wrap the initialization of 'premiumNumeros' in its own useMemo() Hook */}
  {/* Então o react esta me dando um alerta dizendo que pode ter um memorie leek
  e toda vez que o hook for renderizado ele vai pegar todos os numeros, então ele pede pra envolver a variavel no useMemo */}
    </div>
  )
}

export default HookUseMemo
