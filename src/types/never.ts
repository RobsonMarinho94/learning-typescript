function erro(mensagem: string): never {
    throw new Error(mensagem); // A função sempre lança uma exceção
}

function loopInfinito(): never {
    while(true) {
        // ...
    }
}

// Uma função que lança um erro terá o tipo de retorno inferido como never
let resultado = erro("Algo deu errado!");
console.log(resultado); // Esta linha nunca será alcançada