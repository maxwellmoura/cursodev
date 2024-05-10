import React from 'react'
import { useReducer, useState } from 'react'

const HookUseReducer = () => {
    // 2.useReducer situação 1 diferente do useState na variavel vamos colocar o primeiro nome ex: number e o segundo com dispatch
    // que é onde executaremos a função para alterar o valor de number.
    const [number, dispatch] = useReducer((state, action) => {
        //Aqui ela esta pegando o numero do state e colocando um numero aleatorio no seu lugar, e podemos usar esse numero em algum lugar do codigo
        return Math.random(state)
    })
    //2.useReducer com action,
    //Vamos inciar com o variavel e colocar o reducer pra funcionar como o um exemplo de TO.Do.Lister
    const tasksInicial = [
        { id: 1, text: "Fazer a Primeira coisa" },
        { id: 2, text: "Fazer a Segunda coisa" }
    ]

    //2.useReducer com action, então vamos criar uma função do Reducer, para inicar com os valores de taskInicial
    const taskReducer = (state, action) => {
        switch (action.type) {
            //Case vai adicionar a tarefa nova, ele vai gerar um novo ID
            case "ADD":
                const newTask = {
                    id: Math.random(),
                    text: taskTexto,
                }
                //Com a Tarefa criada eu vou zerar a task, pois quero que o input fique em branco pra adicionar a proxima tarefa
                setTaskTexto("")
                // vou retornar novo state, como é um array vou um dispatch operetor, colocando todo o state atual + minha nova tarefa
                return [...state, newTask]
            //case de remover a tarefa
            case "DELETE":
                return state.filter((task) => task.id !== action.id)
            default:
                return state;
        }

    }
    //2,useReducer com action, criando uma forma de adcionar tarefas no sistemas usando o useState
    const [taskTexto, setTaskTexto] = useState("")
    //2.useReducer com action, declaração do reducer, passando o tasks e o dispatchTasks que sera o cara que vai linkar a função,
    //e linkamos tudo isso ao useReducer que vai altarar o meu estado, 
    //e passamos o dispatchTask para ativar taskReducer vai ativar a manipulação do useState.
    //e colocamos o estado inicial nossa taskInicial
    const [tasks, dispatchTasks] = useReducer(taskReducer, tasksInicial)
    //2.useReducer com action, input função do handleSubmit
    const handleSubmit = (e) => {
        //Vamos tirar o envio do evento no html
        e.preventDefault()
        //utilizando o dispatchTasks para disparar uma função que adicione tarefas, 
        //isso sera criado dentro do taskReducer utilizando o switch. Aqui estou invicando a ação
        dispatchTasks({ type: "ADD" })
    }
    //Variavel de remoção de tarefa no onDubleClick
    const removeTask = (id) =>{
        dispatchTasks({type: "DELETE", id})
    }

    return (
        <div>
            <h1>useReducer</h1>
            <p>Número: {number}</p>
            <button onClick={dispatch}>Adicionar Tarefa</button>
            {/*2.useReducer com action , exibindo as tarefas no sistema */}
            <h3>Tarefas</h3>
            <form onSubmit={handleSubmit}>
                {/* input para adicionar as tasks, onChange muda o evento pro setTaskTexto e fazendo um controle do input com value={taskTexto}*/}
                <input type="text"
                    onChange={(e) =>
                        setTaskTexto(e.target.value)}
                    value={taskTexto} />
                {/* input do botão pra enviar */}
                <input type="submit" value="Enviar" />
            </form>
            {tasks.map((task) =>
            //  onDoubleClick serve pra com dois clicks remover a tarefa e vamos chamar ele la na variavel com o id
                <li key={task.id} onDoubleClick={() => removeTask(task.id)}>{task.text}</li>
            )}
            <hr />
        </div>
    )
}

export default HookUseReducer
