const objAluno = {
    nome: "Camila"
    , idade: 16
    , telefone: 51985456889
}

// Recuperar valor do objeto
const pNome = "nome";
const pIdade = "idade";

console.log("1: ", objAluno.nome);
console.log("2: ", objAluno["nome"]);
console.log("3: ", objAluno[pNome]);

// Adicionar ou atualizar valor
objAluno.idade = 17;
objAluno["idade"] = 17;
objAluno[pIdade] = 17;
console.log("Idade atualizada: ", objAluno);

// Apagar uma propriedade
delete objAluno.telefone
console.log("Remover telefone: ", objAluno);