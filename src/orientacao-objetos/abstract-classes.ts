abstract class FiguraGeometrica {
    cor: string; // Propriedade comum

    constructor(cor: string) {
        this.cor = cor
    }

    // Método abstrato, deve ser implementado pelas subclasses
    abstract calcularArea(): number;

    // Método concreto, pode ser implementado ou usado diretamente pelas subclasses
    exibirCor(): void {
        console.log(`A cor da figura é ${this.cor}.`);
    }
}

class Circulo extends FiguraGeometrica {
    raio: number;

    constructor(cor: string, raio: number) {
        super(cor);
        this.raio = raio;
    }

    // Implementação do método abstrato
    calcularArea(): number {
        return Math.PI * this.raio * this.raio;
    }
}

class Retangulo extends FiguraGeometrica {
    largura: number;
    altura: number;

    constructor(cor: string, largura: number, altura: number) {
        super(cor);
        this.largura = largura;
        this.altura = altura;
    }

    // Implementação do método abstrato
    calcularArea(): number {
        return this.largura * this.altura;
    }
}

// let figura = new FiguraGeometrica("vermelho");
// Erro: Cannor create an instance of an abstract class

let meuCirculo = new Circulo("azul", 5);
console.log(`Área do círculo: ${meuCirculo.calcularArea().toFixed(2)}`);
// Saída: Área do círculo: 78.54
meuCirculo.exibirCor(); // Saída: A cor da figura é azul.

let meuRetangulo = new Retangulo("verde", 10, 4);
console.log(`Área do retângulo: ${meuRetangulo.calcularArea()}`);
// Saída: Área do retângulo: 40
meuRetangulo.exibirCor(); // Saída: A cor da figura é verde