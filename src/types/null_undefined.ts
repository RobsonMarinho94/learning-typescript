let valorNulo: null = null;
let valorIndefinido: undefined = undefined;

// Com strict: true, você não pode atribuir null/undefined a outros tipos diretamente
// let meuNome: string = null; // Erro em strict mode
// Para permitir null/undefined, use Union Types
// let podeSerNulo: string | null = "texto";
// podeSerNulo = null; // OK