import { useState, useEffect } from 'react'
//4 customização do hook
import { useFetch } from './hooks/useFetch';
import './App.css';


const url = "http://localhost:3000/produtos"

function App() {
  const [produtos, setProdutos] = useState([])
  // 4 customização hook e 5- refatoramento post
  const { data: itens, httpConfig, loading, error } = useFetch(url)
  const [nome, setNome] = useState("")
  const [preco, setPreco] = useState("")


  //1 - resgatando os dados
  // useEffect(() => {
  //   async function fetchData() {
  //     const res = await fetch(url)
  //     const data = await res.json()
  //     setProdutos(data)
  //   }
  //   fetchData()
  // }, [])


  //2 - adicionar produtos
  const handleSubmit = async (e) => {
    e.preventDefault()
    const produtos = {
      nome,
      preco,
    }
    //  const res = await fetch(url,{
    //    method: "POST",
    //    headers: {
    //      "Content-Type": "aplication/json",
    //    },
    //    body: JSON.stringify(produtos),
    // })
    //3 - Carregamento Dinâmico
    //  const addedProducts = await res.json()
    //  setProdutos((prevProducts) => [... prevProducts, addedProducts ])
    //5 Refatorando POST
    httpConfig(produtos, "POST")
    setNome("")
    setPreco("")
  }
  const handleRemover = (id) => {
    httpConfig(id, "DELETE")
  }

  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      {/* 6 - Loading */}
      {loading && <p>Carregando...</p>}
      {error && <p>{error}</p>}
      <ul>
        {itens &&
          itens.map((produtos) => (
            <li key={produtos.id}>
              {produtos.nome} R$: {produtos.preco}
              <button onClick={() => handleRemover(produtos.id)}>Excluir</button>
            </li>
          ))}
      </ul>
      <div className="add-produtos">
        <p>Adicionar produto:</p>
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input type="text"
              value={nome}
              name="nome"
              onChange={(e) => setNome(e.target.value)}
            />
          </label>
          <label>
            Preço:
            <input type="number"
              value={preco}
              name="preco"
              onChange={(e) => setPreco(e.target.value)} />
          </label>
          {/*7 - Estado de Loading mo POST*/}
          {loading ? <p>Aguarde!</p> : <input type="submit" value="Criar" />}
        </form>
      </div>
    </div>
  );
}

export default App
