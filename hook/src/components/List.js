import {useState, useEffect} from 'react'

const List = ({pegarItens}) => {
    //Mapeamendo do preenchimento do state
    const [meusItens, setMeusItens] = useState([])
    //Aqui quando a propriedade for alterar vai alterar o valor dos meusItens pro pegarItens
    useEffect(() =>{
        console.log("Buscando itens do Banco")
        setMeusItens(pegarItens)
    },[pegarItens])
  return (
    <div>
      {/* Aqui vamos imprimilos */}
     {meusItens && meusItens.map((item) => <p key={item}>{item}</p>)}
     {/* Toda vez que eu fizer a impressão dessa função ele vai reenderizar a pagina, isso não é bom. Vamos resolver la no Hook */}
    </div>
  )
}

export default List
