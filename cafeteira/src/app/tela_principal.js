let listaNome = ["Amanda"];

function adicionaNome(lista, nome) {
    lista.push(nome);
}

console.log("Num antes da função: ", listaNome);
adicionaNome(listaNome, "Clara");
console.log("Num depois da função: ", listaNome);