function somarNumeros(...numeros: number[]): number {
    return numeros.reduce((total, numero) => total + numero, 0);
}

console.log(somarNumeros(1, 2, 3)); // Saída: 6
console.log(somarNumeros(10, 20, 30, 40)); // Saída: 100
console.log(somarNumeros()); // Saída: 0 (array vazio)

function juntarNomes(saudacao: string, ...nomes: string[]): string {
    return `${saudacao}, ${nomes.join(", ")}`;
}

console.log(juntarNomes("Bem-vindo", "Alice", "Bob", "Carl", "Denise"));
// Saída: Bem-vindo, Alice, Bob, Carl, Denise