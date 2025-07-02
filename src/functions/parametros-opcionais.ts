function construirNomeCompleto(primeiroNome: string, sobrenome?: string): string {
    if (sobrenome) {
        return `${primeiroNome} ${sobrenome}`;
    } else {
        return primeiroNome;
    }
}

console.log(construirNomeCompleto("João")); // Saída: João
console.log(construirNomeCompleto("Maria", "Silva")); // Saída: Maria Silva