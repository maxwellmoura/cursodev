import { useEffect, useState, useRef } from "react"

const HookUseRef = () => {
    //5.useRef vamos criar as referencias
    const numeroRef = useRef(0)
    // Refecnciando o contatod como useState, isso podemos fazer com varias referencias
    const [counterA, setCounterA] = useState(0)
    const [counterB, setCounterB] = useState(0)
    const [counterC, setCounterC] = useState(0)
    //A vantagem de usar o useRef que ele esta la pra ser utilizado e o fato de alterar ele, nao precisamos 
    //re-renderizar o componente, diferente do useState.
    useEffect(() =>{
        numeroRef.current = numeroRef.current + 1
    })
    //5.useRef e DOM
    const inputRef = useRef()
    //Criando state pra usar o input
    const [text, setText] = useState("")
    //Fazendo o preventDefault
    const handleSubmit = (e) =>{
      e.preventDefault()
      //resetar o valor do input
      setText("")
      inputRef.current.focus()
    }
    

  return (
    <div>
      <h2>useRef</h2>
      {/* Acessando o valor do useRef utilizamos {numeroRef.current} e assim que acessamos o valor do Ref */}
      <p>O componente renderizou: {numeroRef.current} vezes</p>
      <p>Contador A: {counterA}</p>
      <button onClick={() => setCounterA(counterA + 1)}>Contador A</button>
      <p>Contador B: {counterB}</p>
      <button onClick={() => setCounterB(counterB + 1)}>Contador B</button>
      <p>Contador C: {counterC}</p>
      <button onClick={() => setCounterC(counterC + 1)}>Contador C</button>
      {/* 5.useRef e DOM no input  */}
      <form onSubmit={handleSubmit}>
        <input type="text" 
        ref={inputRef} 
        value={text} 
        onChange={(e) => setText(e.target.value)}/>
        <input type="submit" value="Enviar" />
      </form>
      <hr />
    </div>
  )
}

export default HookUseRef
