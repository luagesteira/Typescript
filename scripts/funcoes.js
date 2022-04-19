"use strict";
var nome;
nome = 'Luara';
console.log(nome);
/////////operações//////////////
function soma(n1, n2) {
    try {
        if ((n1 === undefined) || (n2 === undefined)) {
            throw "não informado";
        }
    }
    catch (err) {
        return 0;
    }
    return n1 + n2;
}
function sub(n1, n2) {
    try {
        if ((n1 === undefined) || (n2 === undefined)) {
            throw "não informado";
        }
    }
    catch (err) {
        return 0;
    }
    return n1 - n2;
}
function mult(n1, n2) {
    try {
        if ((n1 === undefined) || (n2 === undefined)) {
            throw "não informado";
        }
    }
    catch (err) {
        return 0;
    }
    return n1 * n2;
}
function div(n1, n2) {
    try {
        if ((n1 === undefined) || (n2 === undefined)) {
            throw "não informado";
        }
    }
    catch (err) {
        return 0;
    }
    return n1 / n2;
}
