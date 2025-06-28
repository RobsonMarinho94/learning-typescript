function logarMensagem(mensagem: string): void {
    console.log(mensagem);
    // return "algo"; // Erro: Type 'string' is not assignable to type 'void'
}

logarMensagem("Esta é uma mensagem de log.");

let variavelVoid: void = undefined; // Em strict mode apenas unedfined pode ser atribuído ao tipo void
// variavelVoid = null; // Erro em strict mode