// 1. Alias para um tipo primitivo
type ID = string | number; // Um id pode ser string ou um número

function buscarPorId(id: ID) {
    if (typeof id === 'string') {
        console.log(`Buscando por ID string: ${id.toUpperCase()}`);
    } else {
        console.log(`Buscando por ID numérico: ${id.toFixed(0)}`);
    }
}

buscarPorId("abc-123"); // Saída: Buscando por ID string: ABC-123
buscarPorId(456); // Saída: Buscando por ID numérico: 456

// 2. Alias para um tipo de objeto
type Coordenada = {
    x: number,
    y: number
};

function mover(ponto: Coordenada, dx: number, dy: number): Coordenada {
    return {x: ponto.x + dx, y: ponto.y + dy};
}

let pontoInicial: Coordenada = {x: 0, y: 0};
let novoPonto = mover(pontoInicial, 10, 20);
console.log(`Novo ponto: ${novoPonto.x}, ${novoPonto.y}`); // Saída: Novo ponto: 10, 20

// 3. Alias para tipos de função (similar a interfaces para funções)
type FuncaoTransformadora = (valor: number) => number;

let dobrar: FuncaoTransformadora = (n) => n * 2;
let triplicar: FuncaoTransformadora = (n) => n * 3;

console.log(dobrar(7)); // Saída: 14
console.log(triplicar(7)); // Saída: 21

// 4. Interseção de tipos (combina propriedades de vários tipos)
type UsuarioBasico = {
    nome: string,
    idade: number
};

type DetalhesContato = {
    email: string,
    telefone?: string
};

type UsuarioCompleto = UsuarioBasico & DetalhesContato; // Combina os dois tipos

let usuario1: UsuarioCompleto = {
    nome: "Mariana",
    idade: 30,
    email: "mariana@example.com",
    telefone: "123-456-7890"
};

console.log(usuario1);

// 5. Alias de tipo para literais de string (União de literais)
type EstadoPedido = "pendente" | "processando" | "concluído" | "cancelado";

function obterStatus(status: EstadoPedido) {
    console.log(`Status do pedido: ${status.toUpperCase()}`);
}

obterStatus("pendente"); // OK
// obterStatus("erro"); // Erro: Argument of type 'erro' is not assignable to type 'EstadoPedido'


