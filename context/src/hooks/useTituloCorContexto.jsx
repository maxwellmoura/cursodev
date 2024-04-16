import { useContext } from "react";
import { TituloCorContexto } from "../context/TituloCorContexto";

export const useTituloCorContexto = () =>{
    const context = useContext(TituloCorContexto)
    if(!context){
        console.log("Contexto não Encontrado!")
        
    }
    return context
}