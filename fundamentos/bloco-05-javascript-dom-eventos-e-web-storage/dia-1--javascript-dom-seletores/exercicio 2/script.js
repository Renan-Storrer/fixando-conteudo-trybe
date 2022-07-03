let header = document.querySelector('#header-container h1')
// console.log(header);
header.style.color = 'white'
header.style.background = 'rgb(70, 255, 125)'

let h3 = document.querySelectorAll('h3')
// console.log(h3);
for (let index = 0; index < h3.length; index += 1) {
    h3[index].style.color = 'black'
}

let footer = document.querySelector('footer div')
// console.log(footer);
footer.style.color = 'white'
footer.style.background = 'grey'

let urgente = document.querySelectorAll('.emergency-tasks div h3')
// console.log(urgente);
for (let bg = 0; bg < urgente.length; bg += 1){
    urgente[bg].style.backgroundColor = 'purple'
    urgente[bg].style.color = 'white'
}

let naoUrgente = document.querySelectorAll('.no-emergency-tasks div h3')
for (let bgn = 0; bgn < naoUrgente.length; bgn += 1){
    naoUrgente[bgn].style.background = 'black'
    naoUrgente[bgn].style.color = 'white'
}
