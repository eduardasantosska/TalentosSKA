const numNaN = Number('Teste');
console.log("numNaN: ", numNaN);
console.log("é NaN: ", isNaN(numNaN));

const numInfinity = 6/0;
console.log("\nnumInfinity: ", numInfinity);
console.log("é Infinity: ", numInfinity == Infinity);

console.log("\nisInfinity nunNaN: ", isFinite(numNaN));
console.log("isInfinity numInfinity: ", isFinite(numInfinity));
console.log("isInfinity válido: ", isFinite(4));