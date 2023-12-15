export default function Produtos() {
    return (
        <section id="produtos" className="secao-produtos">
            <div className="produtos">
                <div className="texto-produtos">
                    <h1>NOSSO PRODUTOS</h1>
                    <h2>Trabalhamos com óculos de grau, oculos de sol, lentes transitions nos modelos masculinos, femininos e infantil.</h2>
                    <h2>Tdos os nossos preços são acessíveis e conta com a melhor qualidade do mercado</h2>
                </div>
                <div className="secao-card">
                    <div className="cards">
                        <h2>Óculos de Grau</h2>
                        <img src="assets/imagens/oculos01.png" alt="" />
                        <p>R$ 500,00</p>
                    </div>
                    <div className="cards">
                        <h4>Óculos de transitions</h4>
                        <img src="assets/imagens/oculos02.png" alt="" />
                        <p>R$ 750,00</p>
                    </div>
                    <div className="cards">
                        <h4>Óculos de sol</h4>
                        <img src="assets/imagens/oculos03.png" alt="" />
                        <p>R$ 700,00</p>
                    </div>
                    <div className="cards">
                        <h4>Óculos de infantil</h4>
                        <img src="assets/imagens/oculos04.png" alt="" />
                        <p>R$ 500,00</p>
                    </div>
                    <div className="lista">
                        <p>Todos os nossos produtos incluem:</p>
                        <ul>
                            <li>Garantia de 1 ano</li>
                            <li>Manutenção preventiva</li>
                            <li>Descontos especiais na compra da segunda unidade</li>
                            <li>Flexibilidade de pagamento</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}