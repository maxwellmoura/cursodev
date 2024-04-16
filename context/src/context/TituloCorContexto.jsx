import { createContext, useReducer } from "react";

export const TituloCorContexto = createContext()
export const tituloCorReducer = (state, action) => {

    switch (action.type) {
        case "PURPLE":
            return { ...state, color: "purple" };
        case "BLUE":
            return { ...state, color: "blue" };
        default:
            return state;
    }
}
export const TituloCorContextoProvider = ({ children }) => {
    const [state, dispatch] = useReducer(tituloCorReducer, { color: "red", })
    console.log("Titulo Cor: ", state)
    return (
        <TituloCorContexto.Provider value={{ ...state, dispatch }}>
            {children}
        </TituloCorContexto.Provider>
    )
}
