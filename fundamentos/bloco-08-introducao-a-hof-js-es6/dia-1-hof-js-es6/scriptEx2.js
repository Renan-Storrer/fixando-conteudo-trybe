// Ao chamar a função doingThings:
// doingThings(wakeUp);

// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!

const acordando = () => `Acordando!!`;
const cafe = () => `Bora tomar café!!`;
const dormir = () => `Partiu dormir!!`;

const doingThing = (callback) => {
  const frase = callback()
  console.log(frase);
}

doingThing(acordando)
doingThing(cafe)
doingThing(dormir)