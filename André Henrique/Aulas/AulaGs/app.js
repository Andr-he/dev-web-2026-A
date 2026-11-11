var ola = "Olá, mundo JS!";

//cme
console.log(ola);
console.info(ola);
console.error(ola);


function log(valor) {
    console.info(valor);
}


//tipo variavel
var valor = 10;
log(typeof valor);

var palavra = "oi";
log(typeof palavra);

var meuObj = {}
log(typeof meuObj);

var meuArray = []
log(typeof meuArray);

var nulo = null;
log(typeof nulo);  

var indefinido;
log(typeof indefinido); 

//operações simples
const n1 = 1;
const n2 = 5;
const valorNumnericoStr = "5";

log(n1 + n2);
log(n1 * n2);
log(n1 / n2);

//operações lógicas
log(n1 == n2);
log(n2 == valorNumnericoStr);
log(n2 === valorNumnericoStr);


log((n2 > n1 || n1 > n2) && 1>2);

const instituicao = "ceub";

switch (instituicao) {
    case "ceub":
        log("FACULDADE");
        break;
    case "CEM10":
        log("ESCOLA");
        break;
    case "CIL":
        log("ESCOLA DE LINGUAS");
        break;
    default:
        log("INSTITUIÇÃO NÃO CADASTRADA");
}

