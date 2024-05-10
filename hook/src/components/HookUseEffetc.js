import { useEffect, useState } from "react"

const HookUseEffetc = () => {
    //3.useEffect sem dependencia!
    useEffect(()=>{
        console.log("estou sendo executado")
    })
    //3.useEffect, vai ser sempre rederizado quando componente for executado
    //OBS: 3.useEffect, ele é bom pra podemos controlar o que queremos que seja executado independente de outras funções na pagina
    const [number, setNumber] = useState(1)
    const changeSomething = () => {
        setNumber(number + 1)
    }
    //3.useEffect, com array dependências vazio
    useEffect(() =>{
      console.log("Serei executado apenas uma vez")
    },[]) //aqui esta o array dependência vazio, que é o segundo argumento apenas 1 vez
    //3.useEffect, item de array, quando algum valor do item for alterado
    const [depoisDoNumero, setDepoisDoNumero] = useState(0)
    useEffect(() => {
      console.log("Sou executado quando no depois do Numero muda!")
    },[depoisDoNumero])
    //3.useEffect, limpeza de dados, serve pra evitar erros ou carregamentos indesejados
    useEffect(() =>{
      const timer = setTimeout(() =>{
        console.log("Hello World")
        // aqui o react esta vando cada 2000 milissegundos vai mudar
        setDepoisDoNumero(depoisDoNumero + 1)
      }, 200000) // lembrando que esse valor é em milesegundos
      //essa função vai ficar executando em todas as paginas e ai que entra a limpeza desse setup
       return () => clearTimeout(timer)
    }, [depoisDoNumero])

  return (
    <div>
      <h2>useEffect</h2>
      <p>Numéro: {number}</p>
      <button onClick={changeSomething}>Executar!</button>
      {/* Logica para mudar o estado do do array, obs: lembrando que puxando uma arrow fuction 
      pra colocar o setDepoisDoNumero e dentro passamos o item e depois o que ele vai mudar nesse item */}
      <p>Depois do Numero: {depoisDoNumero}</p>
      <button onClick={()=> setDepoisDoNumero(depoisDoNumero + 1)}>Mudar o Numero!</button>
      <hr />
    </div>
  )
}

export default HookUseEffetc
