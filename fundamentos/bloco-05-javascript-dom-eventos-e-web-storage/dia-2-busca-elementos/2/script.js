let elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
// console.log(elementoOndeVoceEsta);

let paiEOVE = document.getElementById('elementoOndeVoceEsta').parentNode
// console.log(paiEOVE);
paiEOVE.style.color = 'red'

let primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
// console.log(primeiroFilhoDoFilho);
let p = document.createElement('p')
primeiroFilhoDoFilho.appendChild(p)
p.innerText = "Olá, tudo bem ?"
p.style.color = 'green'

let primeiroFilho = document.getElementById('pai').children[0]
// console.log(primeiroFilho);

let primeiroFilho2 = document.getElementById('elementoOndeVoceEsta').previousElementSibling
// console.log(primeiroFilho2);

let atencao = document.getElementById('elementoOndeVoceEsta').nextSibling
// console.log(atencao);

let terceiroFilho = document.getElementById('elementoOndeVoceEsta').nextElementSibling
// console.log(terceiroFilho);

let terceiroFilho2 = document.getElementById('pai').childNodes[5]

console.log(terceiroFilho2);