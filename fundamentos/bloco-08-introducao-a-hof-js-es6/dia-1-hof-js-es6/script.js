const repeat = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};

const par = (number) => {
  if (number % 2 === 0) {
    console.log(number, 'é par');
  }
};

const impar = (number) => {
  if ((number % 2) !== 0) {
    console.log(number, 'é ímpar');
  }
};

repeat(10, par); // Testa quais números serão pares;
repeat(10, impar); // Testa quais números serão ímpares;