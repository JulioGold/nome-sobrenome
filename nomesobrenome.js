var nomeSobrenome = {
	nome: PegaNome,
	sobrenome: PegaSobrenome
};

module.exports = nomeSobrenome;

String.prototype.reduceWhiteSpace = function() {
	return this.replace(/\s+/g, ' ');
};

/* Define o prefixo do sobrenome conforme {e, de, da, das, do, dos} pois isto por definição também faz parte do sobrenome */
function DefinePrefixoSobrenome(nomeDividido, indice, strSobrenome){
    
    var parteLogoAnterior = nomeDividido[(indice - 2)].toLowerCase();
    
    /* Caso a palavra logo anterior ao sobrenome seja {e, de, da, das, do, dos} isso também faz parte do sobrenome */
    if (parteLogoAnterior == 'e' ||
        parteLogoAnterior == 'de' ||
        parteLogoAnterior == 'da' ||
        parteLogoAnterior == 'do' ||
        parteLogoAnterior == 'dos') {
        /* Por definição, essas palavras devem ser escritas em minúsculo */
        return parteLogoAnterior + ' ' + strSobrenome;
    } else {
        return strSobrenome;
    }
};

/* Retorna apenas o sobrenome */
function PegaSobrenome(nomeCompleto) {
    
    /* Normaliza o espaçamento das palavras */
    nomeCompleto = nomeCompleto.reduceWhiteSpace().trim();
    
    /* Somente se vier algum valor */
    if (nomeCompleto && nomeCompleto != '') {
        
        /* Divido o nomeCompleto por espaços */
        var nomeDividido = nomeCompleto.split(' ');
        
        /* O sobrenome recebe a última posição do array */
        var strSobrenome = nomeDividido[nomeDividido.length - 1];
        
        var indice = nomeDividido.length - 2;
        
        if ( strSobrenome.toLowerCase().trim() == 'junior' ||
             strSobrenome.toLowerCase().trim() == 'filho' ||
             strSobrenome.toLowerCase().trim() == 'sobrinho' ||
             strSobrenome.toLowerCase().trim() == 'neto' ||
             (strSobrenome.toLowerCase().trim() == 'santo' && nomeDividido[nomeDividido.length - 2].toLowerCase().trim() == 'espirito')) {
            /* Se o sobrenome ficou apenas "junior" então pega a palavra logo anterior para compor o sobrenome */
            /* Se o sobrenome ficou apenas "filho" então pega a palavra logo anterior para compor o sobrenome */
            /* Se o sobrenome ficou apenas "sobrinho" então pega a palavra logo anterior para compor o sobrenome */
            /* Se o sobrenome ficou apenas "neto" então pega a palavra logo anterior para compor o sobrenome */
            /* Se o sobrenome ficou apenas "santo" e a palavra logo anterior é "espirito" então o sobrenome deve ficar Espirito Santo */
            strSobrenome = nomeDividido[indice] + ' ' + strSobrenome;
            strSobrenome = DefinePrefixoSobrenome(nomeDividido, indice + 1, strSobrenome);
            return strSobrenome;
            
            /* Caso desejado alguma outra interpretação de nome, pode implementar aqui, sempre respeitando a estrutura conforme os itens acima. */
        } else {
            /* Se o sobrenome não ficou com nenhuma das outras sentenças anteriores então ja está quase ok */
            indice = nomeDividido.length;
            strSobrenome = DefinePrefixoSobrenome(nomeDividido, indice, strSobrenome)
            return strSobrenome;
        }
    }
};

/* Retorna apenas o nome */
function PegaNome(nomeCompleto) {

    /* Por definição o nome nada mais é do que o nome completo sem o sobrenome */    
    var idx = nomeCompleto.toLowerCase().indexOf(" " + PegaSobrenome(nomeCompleto).trim().toLowerCase());
    return nomeCompleto.substring(0, idx);
};