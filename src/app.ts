function somar(a: number, b: number) {
    return a + b;
}

let resultadoSoma = somar(5, 3);
console.log(`A soma é: ${resultadoSoma}`);

// Exemplo de erro de tipo usando strict: true
// let nome: string = null; 
// Erro se "strictNullChecks" for true, parte de strict