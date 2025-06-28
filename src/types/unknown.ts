let valorDesconhecido: unknown = 10;
valorDesconhecido = "hello";
valorDesconhecido = true;

// console.log(valorDesconhecido.toFixed(2)); // Erro: Object is of type 'unknown'
// Para usar o valor precisamos verificar o tipo
if(typeof valorDesconhecido == 'number') {
    console.log(valorDesconhecido.toFixed(2)); // Saída: 10
}

if (typeof valorDesconhecido === 'string') {
    console.log(valorDesconhecido.toUpperCase()); // Saída: HELLO
}

function processarValor(valor: unknown) {
    if (typeof valor === 'string') {
        console.log(`É uma string: ${valor.length} caracteres.`);
    } else if (typeof valor === 'number') {
        console.log(`É um número: ${valor * 2}.`);
    } else {
        console.log("Tipo desconhecido.")
    }
}

processarValor("TypeScript"); // Saída: É uma string: 10 caracteres.
processarValor(50); // Saída: É um número: 100.
processarValor([1, 2, 3]); // Saída: Tipo desconhecido.