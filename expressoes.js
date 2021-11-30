//Declaração de função

function minhaFuncao(param) {
    //Bloco de código
}

minhaFuncao("parâmetros/funções");

//Expressão de função

// const soma = function(num1, num2) {return num1 + num2}
// console.log(soma(1, 1));

//Diferença principal entre Declaração e Expressão de função: HOISTING
//Funções e var são "listadas" no topo.
console.log(apresentar());

function apresentar() {
    return "Olá mundo";
}

console.log(soma(1, 1));
const soma = function(num1, num2) {
    return num1 + num2}