const alunas = ["Ana", "Bruna", "Carla"];

// CONTINUE
// se não quiser imprimir alunas que começam com B
for(let i=0; i<alunas.length; i++) {
    if(alunas[i].startsWith("B")) {
        continue;
    }
    console.log(alunas[i]);
}

// BREAK
// se quer percorrer até achar uma aluna em especifico
for(let i=0; i<alunas.length; i++) {
    console.log(alunas[i]);
    if(alunas[i] == "Bruna") {
        break;
    }
}