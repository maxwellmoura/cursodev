const numero = Number(prompt('Digite um Numero'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerText = '';
texto.innerHTML += `<p>Seu número - 2 é = ${numero - 2}</p>`;
texto.innerHTML += `<p>Raiz quadrada do numero é = ${numero ** 0.5}</p>`;
texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}</p>`;
texto.innerHTML += `<p>${numero} é NaN? ${Number.isNaN(numero)}</p>`;
texto.innerHTML += `<p>Arredondamento pra baixo: ${Math.floor(numero)}</p>`;
texto.innerHTML += `<p>Arredondamento pra cima: ${Math.ceil(numero)}</p>`;
texto.innerHTML += `<p>Com duas casas decimais = ${numero.toFixed(2)}</p>`;
