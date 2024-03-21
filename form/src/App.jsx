import './App.css'
import MyForm from './components/MyForm'

function App() {
  

  return (
    <>
    <h1>Formulário</h1>
     <MyForm /* 6 controlled input */user={{name: "Josias", email: "josias@gmail.com"}}/>
    </>
  )
}

export default App
