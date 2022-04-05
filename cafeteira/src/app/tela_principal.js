const nomes = new Array();
nomes.push("Amanda", "Talita", "Marcele", "Larissa");

// Para excluir um registro
// splice(posição, qtd itens)
nomes.splice(1, 1);
console.log("Nomes: ", nomes);

// Para verificar se é um array
console.log("É um array? ", Array.isArray(nomes));

// Quantidade de itens
console.log("Quantidade de itens: ", nomes.length);

// Para acessar uma posição especifica do array
// array[posição]
console.log("Posição 0: ", nomes[0]);