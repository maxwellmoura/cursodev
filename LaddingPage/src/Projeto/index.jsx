import './estilo.css';
export default function Home() {
    return (
        <body>
            <header className='header'>
                <h1>Sejam<br /> Bem <br /> Vindos</h1>
            </header>
            <div className='container1'>
                <img className='banner' src='./img/banner.jpeg'></img>
                <h1>Venha fazer parte da maior equipe de jiu jitsu do Brasil</h1>
                <h2>Comandada por <strong className='heder'> Mestre Heder Araujo </strong> afiliado dos mestres Dede Pederneiras, Wendell Alexander, André Marola</h2>
                <p>Contatos e Redes Sociais</p>
                <div className='contatos'>
                    <a href='https://www.instagram.com/teamnovauniao/' target="_blank">
                        <img src='./img/instagram.png'></img>
                    </a>
                    <a href='https://www.facebook.com/novauniaooficial/?fref=ts' target="_blank">
                        <img src='./img/facebook.png'></img>
                    </a>
                    <a href='https://www.youtube.com/channel/UC9cXqfAEoMtiyC7G0gzYgPA' target="_blank">
                        <img src='./img/youtube.png'></img>
                    </a>
                    <a href='https://twitter.com/Teamnovauniao' target="_blank">
                        <img src='./img/twitter.png'></img>
                    </a>
                </div>
            </div>
            <div className='container2'>
                <h2>Formulário para contato</h2>
                <form action='/processar_formulario' method='POST'><br />
                    <label for="nome">Nome:</label><br />
                    <input type="text" id="nome" name='name' required></input><br />
                    <label for="email">Email:</label><br />
                    <input type="text" id='email' name='email' required></input><br />
                    <label for="mensagem">Mensagem</label><br />
                    <input type="text" id='mensagem' name='mensagem' rows='4' cols='50' required></input><br />
                    <input type="submit" value="Enviar"></input>
                </form>
            </div>
        </body>
    )

}