import { useState } from "react";
const ManageDate = () => {
    let somaData = 10;

    const [ number, setNumber] = useState(15);
    return(
        <div>
            <div>
                <p>Valor: {somaData}</p>
                <button onClick={() => (somaDate = 15)}>Mudar Variavel</button>
            </div>
            <p>Valor 2: {number}</p>
            <button onClick={() => setNumber(25)}>Novo Valor</button>
        </div>
    )
}
export default ManageDate;