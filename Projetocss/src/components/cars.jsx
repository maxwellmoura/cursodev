import React from 'react'
import './cars.css'

const Cars = () => {
    let users = [
        { id: 1, name: "Voyage", age: 1985, color: "Preto"},
        { id: 2, name: "Monza", age: 2007, color: "Banco" },
        { id: 3, name: "Opala", age: 2001, color: "Vermelho" },
    ];
    const Objetos = ({ name, age, color }) => {
        return (
            <div className='nomes'>
                <h2>{name}</h2>
                <p>Ano: {age}</p>
                <p>Cor: {color}</p>
            </div>
        )
    }
    return (
        <div >
            {users.map((user) =>
                <Objetos
                    key={user.id}
                    name={user.name}
                    age={user.age}
                    color={user.color}
                />
            )}
        </div>
    )
}

export default Cars
