//importaç]ao de algumas coisas pra funcionar nosso CustomHook
import {useState}from 'react'
//Aqui nosso Hook Customizado
import {usePrevious} from '../hooks/usePrevious'

const HookCustom = () => {
    //Vamos invocar
    const [numero, setNumero] = useState(0)
    //Aqui vamos ter uma variavel com o usePreviews, que vai passar uma variavel numero.
    //Sabemos que quando alteramos o State o componente sera re-renderizado,
    //então automaticamente ele vai passar o valor antigo pra ele, e na proxima vez a gente pode consultar ele novamente antes que ele mude pro valor novamente e perca o valor atual
    const PreviousValue = usePrevious(numero)

  return (
    <div>
      <h2>Custom Hook</h2>
      {/* Vamos colocar aqui os dois valores pra entender */}
      <p>Atual: {numero}</p>
      <p>Anterior: {PreviousValue}</p>
      {/* Aqui temos o botão que vai alterar o valor pra um numero randonico */}
      <button onClick={() => setNumero(Math.random())}>Alterar!</button>
      <hr />
    </div>
  )
}

export default HookCustom
