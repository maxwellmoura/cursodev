import React from 'react'
import { useState } from 'react'

const ListRender = () => {
    const [list] = useState(["Maxwell", "Maria", "Emylly", "Gracy"])

    const [users, setUsers] = useState([
        {id: 1, name: "Maxwell", age: 39},
        {id: 2, name: "Maria", age: 30},
        {id: 3, name: "Manooel", age: 37}
    ])

    const deleteRandom = () =>{
        const randomNumber = Math.floor(Math.random() * 4)

        setUsers((prevUsers) =>{
            return prevUsers.filter((user) => randomNumber !== user.id)
        })
    }

  return (
    <div>
      <ul>
        {list.map((item, i) => (
            <li key={i}>{item}</li>
        ))}
      </ul>
      <ul>
        {users.map((user) =>(
           <li key={user.id}>
            {user.name} - {user.age}
           </li> 
        ))}
      </ul>
      <button onClick={deleteRandom}>Click Para Deletar</button>
    </div>
  )
}

export default ListRender;
