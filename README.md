# nome-sobrenome  

Separa o nome do sobrenome de uma pessoa.

Este pacote tem a intenção de servir como um auxiliador para separar o nome e sobrenome de uma pessoa, tenha em mente que 
não é agarantida a separação exata, pois isto depende do padrão convencionado, foram implementados apenas alguns casos comuns, 
caso encontre algum outro, sinta-se à vontade para realizar a alteração e fazer um pull request.  

Lembrando também que este pacote foi desenvolvido especificamente para o idioma pt-BR.  

Utilização
-----  

```
npm install nome-sobrenome
```  

```javascript

var nomeSobrenome = require("nome-sobrenome");

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

```  

Obrigado  