import calculadora from 'readline-sync';

console.log("Aplicando Juros");
let dias_juros;

let divida = calculadora.question("Digite o valor total: ");
if(divida > 0)
{
    let dias = calculadora.question("Digite quantos dias em atraso: ");

    if(dias > 0)
    {
        if(dias > 15)
        {
            dias_juros = 10;
        }
        else
        {
            dias_juros = 5;
        }


        divida = Number(divida);
        dias = Number(dias);

        let total_juros = (divida / 100) * dias_juros
        let valor_divida = divida + total_juros

        console.log("Valor da divida: R$ "+divida);
        console.log("Dias em atraso: "+dias);
        console.log("Taxa de Juros Aplicado: "+dias_juros+"%");
        console.log("Valor a pagar: R$: "+valor_divida);
    }
    else
    {
        console.log("Você está sem dividas!");
    }
}
else
{
    console.log("O valor deve ser maior que zero!")
}
