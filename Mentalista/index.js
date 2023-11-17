var numeroSecreto = parseInt(Math.random() * 1001)

while(chute != numeroSecreto){
var chute = prompt('Digite o número entrem 0 e 1000')
if (chute == numeroSecreto){
alert('Acertou')
} else if (chute < numeroSecreto){
    alert('Errouuuuu o número secreto é maior')
} else if (chute > numeroSecreto){
    alert('Erroouuuu o número secreto é menor')
    }
}