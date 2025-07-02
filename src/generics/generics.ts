// Função que retorna o primeiro elemento de um array (sem genéricos)
function getPrimeiroElementoString(arr: string[]): string {
    return arr[0];
}
function getPrimeiroElementoNumber(arr: number[]): number {
    return arr[0];
}
// A mesma lógica para diferentes tipos, isso leva a duplicação

// Função genérica: <T> significa que T é um placeholder para um tipo que será definido

function getPrimeiroElemento<T>(arr: T[]): T {
    if (arr.length === 0) {
        // Você precisa lidar com casos de array vazio, o TypeScript não forçará
        // um tipo específico para um índice que não existe.
        // Neste exemplo, retornamos undefined se o array estiver vazio.
        // O tipo de retorno T | undefined é inferido. 
        return undefined as T;
        // Usamos "as T" para indicar que sabemos que pode ser undefined,
        // mas para fins de demonstração, o tipo genérico T 
        // não pode ser apenas undefined.
        // Uma alternativa melhor seria T | undefined como retorno esplícito.
    }
    return arr[0];
}

let strings = ["a", "b", "c"];
let primeiroString = getPrimeiroElemento(strings); // T é inferido como string
console.log(primeiroString); // Saída: a
// console.log(primeiroString.toFixed(2)); // Erro: Property "toFIxed" does not exist on type string

let numeros2 = [10, 20, 30];
let primeiroNumero = getPrimeiroElemento(numeros2); // T é inferido como number
console.log(primeiroNumero); // Saída: 10
console.log(primeiroNumero.toFixed(2)); // Saída: 10.00

let booleanos = [true, false];
let primeiroBooleano = getPrimeiroElemento(booleanos); // T é inferido como boolean
console.log(primeiroBooleano); // Saída: true

// Especificando o tipo explicitamente, raro, mas possível
let itemEspecifico = getPrimeiroElemento<string>(["Olá"]); // Aqui forçamos T a ser string
console.log(itemEspecifico.toUpperCase()); // OK
