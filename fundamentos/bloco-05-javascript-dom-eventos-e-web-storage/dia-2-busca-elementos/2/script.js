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