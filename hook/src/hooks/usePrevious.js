//Basicamente esse hook custon vai salvar o valor anterios de um state,
//caso gostariamos de usar ele em mais de um local!
//OBS: O uso do useDebugValue é apenas pra demostrar com ele funciona
import { useEffect, useRef, useDebugValue } from "react"

//Exportação de uma costante da função do hook, que recebe o valor da State

export const usePrevious = (value) => {
    //Vamos salvar o valor antes do State mudar ele salva eu consigo ter,
    //esse valor antigo
    const ref = useRef

    //Forma de usar o useDebugValue
    useDebugValue("Custom Hook e useDebugValue")
    useDebugValue("O número anterior é?" + value)

    //Aqui utilizamos um useEffect sempre vai ser usando sempre que o hook
    //for solicitado, por isso nao vou criar array dependência
    useEffect(() => {
        ref.current = value
    })
    //retornando o ref.current assim consigo salvar o estado atigo do valor
    return ref.current
    //Agora vamos criar o HookCuston.js pra ver ele na pratica
}
