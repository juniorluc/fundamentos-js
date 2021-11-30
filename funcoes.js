// let x; 
// console.log(x);
// x = "oi";

// function x (texto) {
//     console.log(texto);
//    }

//Há dois momentos em uma função
//O primeiro momento da função é quando declaramos a função
function imprimeTexto (texto) {
    console.log(texto);
}

// //Segundo momento é quando executamos a função uma ou mais vezes.

imprimeTexto(soma());
// imprimeTexto("Estou com sono");

function soma () {
    return 2 + 2;
}

// console.log(soma());