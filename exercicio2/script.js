// A
function soma(num1, num2) {
  return num1 + num2;
}

console.log(soma(14, 6));
console.log("**********************");

// B

function maior(num1, num2) {
  return num1 > num2 ? true : false;
}

console.log(maior(9, 6));
console.log("**********************");

// C

function frase(string) {
  console.log(`tem ${string.length} letras`);
  console.log(string.toUpperCase());
}

frase("Gustavo");
console.log("**********************");
//D

function junto(string) {
  let juncao = string + string.toUpperCase();
  console.log(juncao);
  console.log(`tem ${juncao.length} letras`);
}

junto("Gustavo")