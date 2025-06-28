class Carro {
    marca: string;
    modelo: string;
    ano: number;
    cor?: string;

    constructor(
        marca: string,
        modelo: string,
        ano: number,
        cor?: string
    ) {
        this.marca = marca,
        this.modelo = modelo,
        this.ano = ano,
        this.cor = cor
    }

    exibirDetalhes(): void {
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}`);
        if (this.cor) {
            console.log(`Cor: ${this.cor}`);
        }
    }

    calcularIdadeDoCarro(): string {
        const anoAtual = new Date().getFullYear();
        return `Idade do carro: ${anoAtual - this.ano}`;
    }
}

// Criando instâncias da classe Carro
let meuCarro = new Carro("Toyota", "Corolla", 2020, "Prata");
meuCarro.exibirDetalhes();
meuCarro.calcularIdadeDoCarro();

let outroCarro = new Carro("Honda", "Civic", 2022);
outroCarro.exibirDetalhes();
outroCarro.calcularIdadeDoCarro();