class ContaBancaria {
    public titular: string;
    private saldo: number; // Acessível apenas por esta classe
    protected numeroConta: string; // Acessível dentro da classe e subclasses

    constructor(titular: string, saldoInicial: number, numeroConta: string) {
        this.titular = titular,
        this.saldo = saldoInicial,
        this.numeroConta = numeroConta
    }

    public depositar(valor: number): void {
        if (valor > 0) {
            this.saldo += valor;
            console.log(`Depósito de R$${valor.toFixed(2)} realizado. Saldo atual: ${this.saldo.toFixed(2)}`);
        }
    }

    public sacar(valor: number): boolean {
        if (valor > 0 && valor <= this.saldo) {
            this.saldo -= valor;
            console.log(`Saque de R$${valor.toFixed(2)} realizado. Saldo atual: ${this.saldo.toFixed(2)}`);
            return true;
        }
        console.log(`Saque de R$${valor.toFixed(2)} não permitido. Saldo insuficiente ou valor inválido.`);
        return false;
    }

    public getSaldo(): number { // Método para acessar o saldo privado
        return this.saldo;
    }

    protected getNumeroConta(): string {
        return this.numeroConta;
    }
}

let minhaConta = new ContaBancaria("Alice", 1000, "12345-6");
console.log(minhaConta.titular); // Saída: Alice
//console.log(minhaConta.saldo); 
// Erro: Property saldo is private and only acessible within class 'ContaBancaria'
minhaConta.depositar(300); // Ok
minhaConta.sacar(50); // Ok
console.log(`Saldo atual: R$${minhaConta.getSaldo().toFixed(2)}`); // Ok, via método público

class ContaCorrente extends ContaBancaria {
    private limiteChequeEspecial: number;

    constructor(titular: string, saldoInicial: number, numeroConta: string, limite: number) {
        super(titular, saldoInicial, numeroConta);
        this.limiteChequeEspecial = limite;
        console.log(`Conta corrente criada para ${this.titular}. Número: ${this.getNumeroConta()}`); // Acessa protected
    }

    // Tentar acessar 'saldo' diretamente em uma subclasse ainda é um erro
    // public verificarSaldoSub(): void {
    //     console.log(this.saldo); Erro: 'saldo' is private
    // }
}

let cc = new ContaCorrente("Bob", 500, "78901-2", 200);
// console.log(cc.numeroConta);
// Erro: Property 'numeroConta' is protected and only acessible 
// within class 'ContaBancaria' and its subclasses
cc.getSaldo(); // Continua funcionando