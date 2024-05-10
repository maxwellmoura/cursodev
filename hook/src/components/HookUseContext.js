import { createContext } from "react"
//uso do context sever mais pra você utilizar o mesmo contexto em varias paginas sem precisar esta criando varios states.
export const SomeContext = createContext()

export const HookUseContext = ({children}) =>{
    const contextValue = "teste de contexto"
    return(
        <SomeContext.Provider value={{contextValue}}>
            {children}
        </SomeContext.Provider>
    )
}
