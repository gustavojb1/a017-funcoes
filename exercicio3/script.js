function soma(num1, num2){
    console.log(num1+num2)
}
function subtracao(num1, num2){
    console.log(num1-num2)
}
function multiplicacao(num1, num2){
    console.log(num1*num2)
}
function divisao(num1, num2){
    console.log(num1/num2)
}

const num1=Number(prompt("digite um numero"))
const num2=Number(prompt("digite outro numero"))

soma(num1,num2)
console.log("*************************")
subtracao(num1,num2)
console.log("*************************")
multiplicacao(num1,num2)
console.log("*************************")
divisao(num1,num2)