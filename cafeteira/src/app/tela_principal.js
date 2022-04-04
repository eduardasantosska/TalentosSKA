let animal = '   gato';
console.log('Original:', animal);

// concatenar
animal = animal + ' e cachorro   ';
console.log('Concatenar:', animal);
// alterar os caracteres
animal = animal.toUpperCase();
console.log('Alterar caracteres:', animal);
// remover em branco
animal = animal.trim();
console.log('Remover em branco:', animal);
// verificar se faz parte
console.log('Verificar se gato faz parte:', animal.includes('GATO'));
// remover
animal = animal.slice(0,4);
console.log('Remover:', animal);