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