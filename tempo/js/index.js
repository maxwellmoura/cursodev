const btn = document.querySelector(".btn-busca");
const inputValue = document.querySelector("#input-busca");
const cidade = document.querySelector("#cidade");
const tempo = document.querySelector("#icone-tempo");
const umidade = document.querySelector("#umidade");
const velocidadeVento = document.querySelector("#velocidade-do-vento");
const token = "8c686d618ec6407c855160016232311";


const fazerFetch = async () =>{
    const link = `http://api.weatherapi.com/v1/current.json?key=${token}&q=${inputValue.value}&aqi=no`;
    const fazerReq = await fetch(link);
    const {current, location}= await fazerReq.json();
    
    return [current, location];
}
const renderizar = async () =>{
    const resposta = await fazerFetch();
    const imagem = resposta[0].condition.icon
    tempo.setAttribute("src", imagem)
    cidade.innerText = `${resposta[1].name}`;
    umidade.innerText = `${resposta[0].humidity} %`
    velocidadeVento.innerText = `${resposta[0].wind_kph} km/h`
    console.log(resposta);
}
btn.addEventListener("click", renderizar);
