let nota = -40;
let situacao;

if (nota >= 80) {
    situacao = "aprovado";
} else if (nota < 80 && nota >= 60 ) {
    situacao = "lista"
} else if (nota < 60 && nota >= 0){
    situacao = "reprovado"
} else {
    situacao = "erro"
}


switch (situacao) {
    case "aprovado":
    console.log('aprovado')
        break;
    case "lista":
    console.log('lista')
        break;
    case "reprovado":
    console.log('reprovado')
        break;
    default:
        console.log("não se aplica")
}