let elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');

let pai = elementoOndeVoceEsta.parentElement;
pai.style.color = 'red';

let primeiroFilhoDoFilho = elementoOndeVoceEsta.firstElementChild;
primeiroFilhoDoFilho.innerText = 'TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO';

let primeiroFilho = pai.firstElementChild;

let primeiroFilho2 = elementoOndeVoceEsta.previousElementSibling;

let textElement = elementoOndeVoceEsta.nextSibling;

let terceiroFilho = elementoOndeVoceEsta.nextElementSibling;

let terceiroFilho2 = pai.lastElementChild.previousElementSibling;

let pai2 = document.getElementById('pai');
let irmaoElementoOndeVoceEsta = document.createElemente('section');
irmaoElementoOndeVoceEsta.id = 'irmaoElementoOndeVoceEsta'
pai.appendChild(irmaoElementoOndeVoceEsta);

let elementoOndeVoceEsta2 = document.getElementById('elementoOndeVoceEsta');
let filhoElementoOndeVoceEsta = document.createElement('section');
filhoElementoOndeVoceEsta.id = 'filhoElementoOndeVoceEsta';
elementoOndeVoceEsta.appendChild(filhoElementoOndeVoceEsta);

let primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho')
let filhoPrimeiroFilhoDoFilho2 = document.createElement('section');
filhoPrimeiroFilhoDoFilho2.id = 'filhoPrimeiroFilhoDoFilho';
primeiroFilhoDoFilho.appendChild(filhoPrimeiroFilhoDoFilho2);

let terceiroFilho3 = filhoPrimeiroFilhoDoFilho2
    .parentElement // primeiroFilhoDoFilho
    .parentElement // elementoOndeVoceEsta
    .nextElementSibling; // terceiroFilho
console.log(terceiroFilho);