// Função com parâmetros tipados e retorno tipado
function somar(a: number, b: number): number {
    return a + b;
}

console.log(somar(10, 20)); // Saída: 30
// console.log(somar(10, "20")); // Erro: Argument of type 'string' 
// is not assignable to parameter of type 'number'

// Função sem retorno (void)
function logarMensagem(msg: string): void {
    console.log(`LOG: ${msg}`);
}

logarMensagem("Iniciando aplicação...");

// Função que retorna uma string
function criarSaudacao(nome: string, idade: number): string {
    return `Olá, meu nome é ${nome} e eu tenho ${idade} anos.`;
}

console.log(criarSaudacao("Fernanda", 25));