// Assinaturas de sobrecarga
function criarCombinação(a: string, b: string): string;
function criarCombinação(a: number, b: number): number;
function criarCombinação(a: string | number, b: string | number): string | number; // Assinatura de implementação

function criarCombinação(a: any, b: any): any {
    if (typeof a === 'string' && typeof b === 'string') {
        return a + b; // Concatena strings
    }
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b; // Soma dos números
    }
    throw new Error("Tipos de parâmetros incompatíveis");
}

console.log(criarCombinação("Olá", "Mundo!")); // Saída: Olá Mundo!
console.log(criarCombinação(10, 20)); // Saída: 30
console.log(criarCombinação(10, "20")); // Erro: No overload matches this call
