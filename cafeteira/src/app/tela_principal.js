inicio();

function inicio() {
    if (true) {
        var escopoFuncao;
        let escopoBloco;

        escopoFuncao = "VAR";
        escopoBloco = "LET";

        console.log("IF escopoFuncao: ", escopoFuncao); // VAR
        console.log("IF escopoBloco: ", escopoBloco); // LET 
    }
    console.log("escopoFuncao: ", escopoFuncao); // VAR
    console.log("escopoBloco: ", escopoBloco); // LET 
}