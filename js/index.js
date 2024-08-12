document.getElementById("texto").innerHTML="olá mundo, eu sou o javascript";                                                                              console.log("olá mundo, eu sou o javascript");                                                                                    //declaração de variavels


// biome-ignore lint/style/noVar: <explanation>
// biome-ignore lint/style/useSingleVarDeclarator: <explanation>
var nome,sobrenome,nomeCompleto, idade, soma;
nome = "evilin";
sobrenome = "silva";
idade = 30;
// biome-ignore lint/style/useTemplate: <explanation>
nomeCompleto = nome + " " + sobrenome;

soma =idade + 10;
// biome-ignore lint/style/useTemplate: <explanation>
pessoa = nome + " " + soma;

document.getElementById("texto").innerHTML = pessoa;

// biome-ignore lint/style/useConst: <explanation>
let x = 10;
{
// biome-ignore lint/style/useConst: <explanation>
let x = 2;
}
document.getElementById("texto").innerHTML = x;

// biome-ignore lint/style/useSingleVarDeclarator: <explanation>

// operadores matemáticos

let valor1;
let valor2;
// biome-ignore lint/style/useConst: <explanation>
let total;
valor1 = 5;
vaolr2 = 2;
total = --valor1;
alert(total);
alert(`O valor1 ficou: ${valor1}`);
