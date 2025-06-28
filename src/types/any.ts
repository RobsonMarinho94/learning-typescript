let valor: any = "qualquer coisa";
valor = 123;
valor = true;

let lista: any[] = [1, "dois", true];

function exibir(param: any) {
    console.log(param.length);
    return param;
}
// Sem erro de compilação, mas pode falhar em runtime se param não for string/array

exibir("hello");
exibir(lista);
exibir(123); // Erro em tempo de execução: "Cannot read properties of undefined (reading 'length')"