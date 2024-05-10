//importação do dois hooks pra ser utilizado nesse exemplo
import {useCallback, useState} from 'react'
//uso de um arquivo
import List from './List'


const HookUseCallback = () => {
    //fazer um contador pra simular a atualização do componente
    const [counter, setCounter] = useState(0)
    //Simulação de dado chegando do banco vamos fazer nessa variavel, utilizando o useCallback 
    //ele para de executar tudo na reenderização e apenas executar quando for necessario.
    //separando a logica abaixo do Refresh da pagina
    const itensDoBancodeDados = useCallback(() =>{
      return['a', 'b', 'c']
    },[])
  return (
    <div>
      <h2>useCallback</h2>
      {/* Atualização do state com o sistemas */}
      <List pegarItens={itensDoBancodeDados} />
      <button onClick={() => setCounter(counter + 1)}>Alterar!</button>
      <p>{counter}</p>
      <hr/>
    </div>
  )
}

export default HookUseCallback
