interface Saudavel {
    nome: string;
    saudar(mensagem: string): void;
}

class Usuario implements Saudavel {
    nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }

    saudar(mensagem: string): void {
        console.log(`${mensagem}, ${this.nome}!`);
    }

    // Método adicional, não definido na inteface
    dizerIdade(idade: number): void {
        console.log(`${this.nome} tem ${idade} anos.`);
    }
}

let usuarioWeb = new Usuario("Pedro");
usuarioWeb.saudar("Olá"); // Saída: Olá, Pedro!
usuarioWeb.dizerIdade(30); // Saída: Pedro tem 30 anos.

// Podemos usar a interface como tipo
let outraPessoa: Saudavel = new Usuario("Luiza");
outraPessoa.saudar("E aí"); // Saída: E aí, Luiza!
// outraPessoa.dizerIdade(25); 
// Erro: Property 'dizerIdade' does not exist on type 'Saudavel'
// Isso porque 'outraPessoa' foi tipada como 'Saudavel',
// que não possui o método 'dizerIdade'