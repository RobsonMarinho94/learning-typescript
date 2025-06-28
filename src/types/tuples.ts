// Uma tupla que representa um par [código, nome]
let usuario: [number, string] = [1, "Alice"];
// usuario = ["Bob", 2]; // Erro: Type 'string' is not assignable to type 'number' at index 0

// Acessando elementos
console.log(usuario[0]); // Saída: 1
console.log(usuario[1]); // Saída: Alice

// Tuplas podem ter um número variável de elementos no final
// mas os casos fixos são mais comuns
let coordenadas: [number, number, number?] = [10.5, 20.3]; 
// O terceiro elemento é opcional
coordenadas = [10.5, 20.3, 5.8];