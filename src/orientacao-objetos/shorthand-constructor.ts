class PessoaSimplificada {
    // Sem precisar declarar nome e idade explicitamente como propriedades
    constructor(public nome: string, private idade: number) {}
    // As propriedades 'nome' e 'idade' são criadas e inicializadas automaticamente

    exibirInfo(): void {
        console.log(`Nome: ${this.nome}, Idade: ${this.idade}`);
    }

    getIdade(): number {
        return this.idade;
    }
}

let ps = new PessoaSimplificada("João", 40);
console.log(ps.nome); // Saída: João
// console.log(ps.idade); // Erro: Property 'idade' is private
console.log(ps.getIdade); // Saída: 40
ps.exibirInfo(); // Saída: Nome: João, Idade: 40