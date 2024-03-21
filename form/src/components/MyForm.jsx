import React from 'react'
import { useState } from 'react'
import './MyForm.css'

const MyForm = ({ user }) => {
    // 6 controlled input
    // 3 - gerenciamento de dados
    const [name, setName] = useState/* 6 controlled input */(user ? user.name : "")
    const [email, setEmail] = useState/* 6 controlled input */(user ? user.email : "")
    /* 9 Select */const [role, setRole] = useState("")
    /* 8 Textarea */  const [bio, setBio] = useState("")
    const handleName = (e) => {
        setName(e.target.value)
    }

    // 5 - Envio de Form
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Enviando Formulario")
        console.log(name, email, bio, role)
        //7 - limpar formulario
        setName("");
        setEmail("");
        setBio("");
    }

    return (
        <div>
            {/* 5 - Envio de Form*/}
            <form onSubmit={handleSubmit}>
                {/* 1 - cruando o form */}


                <label htmlFor="name">Nome:
                    <input type="text" name='name' placeholder='Digite seu nome' onChange={handleName} value={name} />

                    {/* 2 - Label envolvendo input*/}

                    <span>E-mail</span>
                    <input type="email" name="email" placeholder="Digite seu e-mail" /* 4 - Simplificação de manipulaçao State */ onChange={(e) => setEmail(e.target.value)} value={email} />
                    {/* 8 Textarea */}

                    <textarea name='bio' placeholder='Escreva algo' onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
                    {/* 9 - Select */}
                    <label>
                        <span>Função Do sistenma</span>
                        <select nome="role" onChange={(e) => setRole(e.target.value)}>
                            <option value="user">Usuario</option>
                            <option value="editor">Editor</option>
                            <option value="admin">Administrador</option>

                        </select>
                    </label>
                </label>

                <input type="submit" value="Enviar" />

            </form>
        </div>
    )
}

export default MyForm
