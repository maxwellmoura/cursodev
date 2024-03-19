import { useState } from "react"

const CondicionalRender = () => {
    const [x] = useState(false);

    const [name, setName] = useState("Maxwell")
  return (
    <div>
      <h1>Isso será exibido?</h1>
      {x && <p>se x for true, sim!</p>}
      {!x && <p>Agora X é Falso!</p>}
      {name === "Maxwell"? (
        <div> <p>O nome é Maxwell</p>
        </div>
      ) : (<div>
        <p>Nome não é Maxwell</p>
      </div>)}
      <button onClick={() => setName("João")}>Clique Aqui</button>
    </div>
    
  )
}

export default CondicionalRender
