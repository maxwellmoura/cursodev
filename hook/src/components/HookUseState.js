import { useState } from "react";

const HookUseState = () => {
    // 1.useState Uso mais comum do useState, utilizado quando a gente precisa alterar o valor, e renderziar o novo componente quando precisa ser exibido
    let userName = "Maxwell";
    // 1.useState Mudança na forma de criar, desestruturando com uma constante, dentro dessa constante colocamos o nome da variavel e um set"Nome da Variavel"
    // onde o primeiro e a consulta "name" onde vamos obter o valor desse state, e o segundo "setName" e o metodo que vamos utilizar ma mudar o valor do state
    // como se o name fosse o geter = name e o seter = setName e temos a posibilidade de iniciar o valor no useState() como se fosse um construtor na formação
    // orientada a objeto onde inicia o valor no objeto na classe que coloquei como "Moura"
    const [name, setName] = useState("Moura");
    // 1.useState função para mudar os dois nomes ja criados
    const mudarNomes = () => {

        userName = "Gracy"
        setName("e Maxwell Moura")
    }
    // 2.useState e input (aqui setamos ja o valor inicial do State ele sera modificado pelo usuario quando digitar algo no input)
    const [age, setAge] = useState("")

    // 2.inputfunção do handleSubmit
    const handleSubmit = (e) => {
        //Vamos tirar o envio do evento no html
        e.preventDefault()
        //envio de uma API se a gente tivesse, vamos usar so o console.log
        console.log(age)
    }

    return (
        <div>
            {/* 1 - useState */}
            <h1>useState</h1>
            <p>Variável: {userName}</p>
            <p>useState: {name}</p>
            {/* 1- useState Botão pra fazer a função funcionar, assim fazendo apenas que a 
                função dentro do useState mude deixando a variavel intacta */}
            <button onClick={mudarNomes}>Mudar Nome</button>
            {/* 2.useState e input aqui vamos criar o formulario pra utilizar as variaveis do age */}
            <p>Digite sua idade:</p>
            {/* 2. input colocando o evento de envio com o onSubmit sempre que vamos criar um evento 
            colocamos handle..alguma coisa como estamos usando o Submit então vamos chamar handleSubmit*/}
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    value={age}
                    onChange={(e) =>
                        setAge(e.target.value)} />
                <input type="submit" value="Enviar" />
            </form>
            <p>Você tem {age} de idade!</p>
            <hr />
        </div>
    );
};

export default HookUseState;
