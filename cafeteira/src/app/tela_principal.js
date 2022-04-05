const arrayExemplo = [1, 2, 3, 4];

// map: criar um novo array a partir do primeiro
const novoArray = arrayExemplo.map((valor) => valor-1);
console.log("arrayExemplo: ", arrayExemplo);
console.log("novoArray: ", novoArray);

// filter: criar um novo array de itens pares
const arrayPares = arrayExemplo.filter((valor) => valor%2 === 0);
console.log("arrayPares: ", arrayPares);

// find: encontrar um elemento
console.log("elemento 2: ", arrayExemplo.find((valor) => valor == 2));