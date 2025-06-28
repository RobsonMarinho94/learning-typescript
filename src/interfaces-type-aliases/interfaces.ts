// 1. Interface básica para um objeto pessoa
interface Pessoa {
    nome: string,
    idade: number,
    email?: string // ? indica que é opcional
}

function exibirDadosPessoa(pessoa: Pessoa) {
    console.log(`Nome: ${pessoa.nome}`);
    console.log(`Idade: ${pessoa.idade}`);
    if (pessoa.email) {
        console.log(`Email: ${pessoa.email}`);
    }
}

let pessoa1: Pessoa = {
    nome: "Ana",
    idade: 28
};

let pessoa2: Pessoa = {
    nome: "Carlos",
    idade: 35,
    email: "carlos@example.com"
};

exibirDadosPessoa(pessoa1);

exibirDadosPessoa(pessoa2);

// let pessoaInvalida: Pessoa = {nome: "Maria"};
// Erro: Porperty 'idade' is missing in type

// 2. Propriedades somente leitura (readonly)
interface Produto {
    readonly id: number, // Não pode ser alterado após a inicialização
    nome: string,
    preco: Number
}

let meuProduto: Produto = {
    id: 101,
    nome: "Notebook",
    preco: 2500.00
}

// meuProduto.id = 102; // Erro: cannot asign to 'id' because it is a read-only property
meuProduto.nome = "Smartphone"; // OK

// 3. Interfaces para funções (call signatures)
interface FuncaoCalculadora {
    (x: number, y: number): number; // Define a assinatura da função
};

let adicionar: FuncaoCalculadora = function(a: number, b: number) {
    return a + b;
};

let subtrair: FuncaoCalculadora = (a, b) => a - b; // Inferência de tipo funciona aqui

console.log(adicionar(10, 5));
console.log(subtrair(10, 5));

// 4. Estendendo interfaces
interface Animal {
    nome: string,
    emitirSom(): void
}

interface Cachorro extends Animal {
    raca: string,
    latir(): void
}

let meuCachorro: Cachorro = {
    nome: "Rex",
    raca: "Labrador",
    emitirSom: () => console.log("Au Au"),
    latir: () => console.log("Latindo...")
}

meuCachorro.emitirSom();
meuCachorro.latir();