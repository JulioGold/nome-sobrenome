var nomeSobrenome = require('../nomesobrenome.js');

/* Nomes de exemplos apenas */
var nomes = [
    { nome: "Julio Goldschmidt"},
    { nome: "Julio De Souza Junior"},
    { nome: "Julio Goldschmidt Junior"},
    { nome: "Julio De Souza Filho"},
    { nome: "Julio Goldschmidt Filho"},
    { nome: "Julio De Souza Sobrinho"},
    { nome: "Julio Goldschmidt Sobrinho"},
    { nome: "Julio De Souza Neto"},
    { nome: "Julio Goldschmidt Neto"},
    { nome: "Julio De Souza Do Espirito Santo"},
    { nome: "Julio Do Espirito Santo"},
    { nome: "Julio E Lima"},
    { nome: "Julio De Souza"},
    { nome: "Julio Da Rosa"},
    { nome: "Julio Do Amaral"},
    { nome: "Julio Dos Santos"}
];

nomes.forEach(function(element) {
    console.log( 'Nome: ' + nomeSobrenome.nome(element.nome) );
    console.log( 'Sobrenome: ' + nomeSobrenome.sobrenome(element.nome) );
    console.log( '------------------------');
}, this);