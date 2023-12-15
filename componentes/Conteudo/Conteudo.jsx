export default function Conteudo() {
    return (
        <section id="sobre" className="secao-sobre">
            <article className="sobre">
                <h3>QUEM SOMOS NÓS?</h3>
                <p>Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Ótica vida iniciou suas atividades focada no atendimento ao publico de<br>
                </br>renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço braixo</p>
            </article>
            <div className="foto">
                <img src="assets/imagens/loja.png" alt="loja" />
            </div>
            <div className="card">
                <h1>NOSSAS FILIAIS</h1>
                <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
            </div>
            <div className="foto">
                <img src="assets/imagens/atendimento.png" alt="loja" />
            </div>
            <div>
                <h1>ATENDIMENTO<br></br>FLEXIVEL</h1>
                <p>Nossa equipe é treinada para te atender</p>
            </div>

            <div className="fale-conosco">

                <h2>FALE CONOSCO</h2>
                <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou na centra de atendimento</p>

                <div className="contato-container">
                    <aside id="contato" className="contato">
                        <h2>Contato</h2>
                        <figure>
                            <img src="assets/imagens/local.png" alt="loja" /><figcaption>Nova Iguaçu, RJ</figcaption>
                        </figure>
                        <figure>
                            <img src="assets/imagens/telefone.png" alt="loja" /><figcaption>(21) 99999-9999</figcaption>
                        </figure>
                        <figure>
                            <img src="assets/imagens/email.png" alt="loja" /><figcaption>contato@oticavida.com</figcaption>
                        </figure>
                    </aside>
                    <aside className="contato">
                        <h2>Redes Sociais</h2>
                        <figure>
                            <img src="assets/imagens/fb.png" alt="loja" /><figcaption>/OticaVida</figcaption>
                        </figure>
                        <figure>
                            <img src="assets/imagens/ig.png" alt="loja" /><figcaption>oticavidarj</figcaption>
                        </figure>
                        <figure>
                            <img src="assets/imagens/tt.png" alt="loja" /><figcaption>oticavidarj</figcaption>
                        </figure>
                    </aside>
                </div>
            </div>
        </section>


    )
}