interface Caixa<T> {
    conteudo: T;

    // Opcional: um método que retorna o conteúdo
    getConteudo(): T;
}

// Criando caixas com diferentes tipos de conteúdo