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

style1.style.background = 'grey'
style1.style.color = 'white'

style2.style.fontFamily = 'monospace'
style2.style.fontSize = '25px'

let subititulo2 = document.getElementsByTagName('h4')[0]
// console.log(subititulo2);
subititulo2.style.background = 'red'
subititulo2.style.color = 'white'
subititulo2.style.fontSize = '20px'
subititulo2.style.fontFamily = 'monospace'