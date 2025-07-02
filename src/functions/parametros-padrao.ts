function exibirInfoProduto(nome: string, preco: number, desconto: number = 0): void {
    const precoFinal = preco - (preco * desconto);
    console.log(`Produto: ${nome}, Preço original: ${preco.toFixed(2)}, Desconto: ${desconto * 100}%, Preço final: ${precoFinal.toFixed(2)}`);
}

exibirInfoProduto("Camiseta", 50);

exibirInfoProduto("Calça", 120, 0.1);