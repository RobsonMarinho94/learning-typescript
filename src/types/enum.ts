// Enum numérico - valores padrão começam em 0
enum Direcao {
    Norte,
    Leste,
    Sul,
    Oeste
}

let direcaoAtual: Direcao = Direcao.Norte;
console.log(direcaoAtual);
console.log(Direcao.Sul);

// Enum numérico com valores personalizados
enum StatusPedido {
    Pendente = 1,
    Processando = 2,
    Enviado = 3,
    Entregue = 4,
    Cancelado = 99
}

let statusDoMeuPedido: StatusPedido = StatusPedido.Processando;
console.log(statusDoMeuPedido);
console.log(StatusPedido[2]);

// Enum de string - melhor legibilidade do valor em tempo de execução
enum Cores {
    Vermelho = "VERMELHO",
    Verde = "VERDE",
    Azul = "AZUL",
    Amarelo = "AMARELO"
}

let corEscolhida: Cores = Cores.Verde;
console.log(corEscolhida);
// console.log(Cores["VERMELHO"]); // Erro : Não há acesso inverso por string em enums de string