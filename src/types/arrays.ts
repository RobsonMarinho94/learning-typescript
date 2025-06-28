// Sintaxe comum
let numeros: number[] = [1, 2, 3, 4, 5];
let nomes: string[] = ["Alice", "Bob", "Charlie"];
let misto: (number | string)[] = [1, "dois", 3];

// Sintaxe genérica
let idades: Array<number> = [25, 30, 35, 40];

// Adicionando elementos
numeros.push(6);
// numeros.push("sete"); // Erro: Argument of type 'string' is not assignable to parameter of type 'number'

// Acessando elementos
console.log(nomes[1]);