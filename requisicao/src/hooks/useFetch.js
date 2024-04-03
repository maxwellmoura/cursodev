import { useState, useEffect } from "react";
//4 - Customizando Hook
export const useFetch = (url) => {
    const [data, setData] = useState(null)
    // 5 - Refatorando Post
    const [config, setConfig] = useState(null)
    const [method, setmethod] = useState(null)
    const [callFetch, setCallFetch] = useState(false)

    //6 - Loading
    const [loading, setLoading] = useState(false)

    // 7 - Tratando Erros
    const [error, setError] = useState(false)
    const [itemId, setItemId] = useState(null)

    const httpConfig = (data, metodo) => {
        if (metodo === "POST") {
            setConfig({
                method: "POST",
                headers: {
                    "Content-type": "aplication/json",
                },
                body: JSON.stringify(data)
            })
            setmethod("POST")
        } else if (metodo === "DELETE") {
            setConfig({
                method: "DELETE",
                headers: {
                    "Content-Type": "aplication/json"
                }
            })
            setmethod("DELETE")
            setItemId(data)
        }
    }

    //4 customizando hook

    useEffect(() => {
        const fetchData = async () => {
            //6 - loading
            setLoading(true)
            try {
                const res = await fetch(url)
                const json = await res.json()
                setData(json)
                setmethod(null)
                setError(null)
            } catch (error) {
                setError("Houve algum erro ao carregar os dados")
            }
            setLoading(false)
        }
        fetchData()
    }, [url, callFetch])


    // 5 - refatorando post
    useEffect(() => {
        const httpRequest = async () => {
            if (method === "POST") {
                // 7 - Loading Post
                let fetchOpticao = [url, config]
                const res = await fetch(...fetchOpticao)
                const json = await res.json()
                setCallFetch(json)
            } else if (method === "DELETE") {
                const deleteUrl = `${url}/${itemId}`
                const res = await fetch(deleteUrl, config)
                const json = await res.json()
                setCallFetch(json)
            }
        }
        httpRequest()
    }, [config, itemId, method, url])
        
    
return { data, httpConfig, loading, error }
}