let titulo = document.getElementById('page-title')
titulo.innerText = 'ILHA DO MEDO'

let segundoParagrafo = document.getElementById('second-paragraph')
segundoParagrafo.innerText = 'filme sobre a loucura da sua mente e como ela interagem sobre o mundo externo'

let subititulo = document.getElementById('subtitle')
subititulo.innerText = 'Sobre:'

let paragrafo = document.getElementById('paragraph')
paragrafo.style.color = 'blue'

paragrafo.className = 'style'
segundoParagrafo.classList.add ('style')
// console.log(paragrafo);
// console.log(segundoParagrafo);

let style1 = document.getElementsByClassName('style')[0];
let style2 = document.getElementsByClassName('style')[1];
// console.log(style1);
// console.log(style2);
