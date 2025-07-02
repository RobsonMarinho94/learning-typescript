export class Animal {
    nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }

    mover(distancia: number = 0): void {
        console.log(`${this.nome} moveu ${distancia}m.`);
    }
}

export class Cachorro extends Animal {
    raça: string;

    constructor(nome: string, raça: string) {
        super(nome); // Chama o construtor da classe mãe Animal
        this.raça = raça;
    }

    latir(): void {
        console.log(`${this.nome} (${this.raça}) está latindo! Au Au Au!`);
    }

    // Sobrescrevendo um método da classe mãe
    mover(distancia: number = 5): void {
        console.log(`${this.nome} correu ${distancia}m.`);
        // super.mover(distancia); // É opcional chamar o método da superclasse
    }
}

let meuAnimal = new Animal("Tartaruga");
meuAnimal.mover(1); //Saída: Tartarug moveu 1m.

let meuGolden = new Cachorro("Buddy", "Golden Retriever");
meuGolden.latir(); // Saída: Buddy (Golden Retriever) está latindo! Au Au Au!
meuGolden.mover(20); // Saída: Buddy correu 20m. (Chamou o método sobrescrito)