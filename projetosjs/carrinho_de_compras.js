const itensCarrinho = [
    { id: 1, nome: 'Açucar', qnt: 2, valor: 2.00 },
    { id: 2, nome: 'Álcool 70', qnt: 3, valor: 9.95 },
    { id: 3, nome: 'Luvas descartáveis', qnt: 50, valor: 2.50 },
    { id: 4, nome: 'Sabão', qnt: 4, valor: 6.00 },
    { id: 4, nome: 'Papel Higienico', qnt: 6, valor: 2.00 },
    { id: 4, nome: 'Copo', qnt: 3, valor: 2.75 },
  ];
  
  function somarValor (total, itemCarrinho) {
    const valorTotal = itemCarrinho.qnt * itemCarrinho.valor;
  
    return total + valorTotal;
  }
  
  const valorAPagar = itensCarrinho.reduce(somarValor, 0);
  
  console.log(valorAPagar);