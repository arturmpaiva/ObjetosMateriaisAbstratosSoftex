//      OBJETOS ABSTRATOS
Object.freeze(Roupa);
Object.defineProperty(window, "Roupa", { 
    tipo: 'camiseta',
    loja: 'renner',
    preço: 90, 
});

Object.freeze(Veiculo);
Object.defineProperty(window, "Veiculo", { 
    tipo: 'carro',
    abastecimento: 'eletrico',
    seguro: 'não',

    acelerar: function () {
        console.log(`Acelerando ${this.tipo}...`);
    },
    freiar: function () {
        console.log(`Freiando ${this.tipo}...`);
    },
    ligar: function(){
        console.log(`Ligando ${this.tipo}...`);
    }
});


//      OBJETOS MATERIAIS
const Carro = {
    marca: Fiat,
    modelo: Palio,
    ano: 2015
}

const Camiseta = {
    marca: 'Abercrombie',
    cor: 'azul',
    tamanho: 'M',
    vestir: function() {
        console.log("Vestindo camiseta ...");
    },
    lavar: function() {
        console.log("Lavando camiseta...");
    },
    pendurar: function() {
        console.log("Pendurando camiseta...");
    }
}