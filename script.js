let number1 = prompt("Digite o primero numero")
let number2 = prompt("Digite o segundo numero")

let sum = Number(number1) + Number(number2)
let multi = Number(number1) * Number(number2)
let sub = Number(number1) - Number(number2)
let div = Number(number1) / Number(number2)
div = div.toFixed(2)
let rest = Number(number1) % Number(number2)

alert("A soma dos dois numeros é: "+sum)
alert("A subtração dos dois numeros é: "+sub)
alert("A multiplicação dos dois numeros é: "+multi)
alert("A divisão dos dois numeros é: "+div)
alert("O resto da divisão dos dois numeros é: "+rest)

if (sum % 2 == 0)
alert("A soma dos dois numeros é par: " + sum)
else{
    alert("A soma dos dois numeros é impar: " + sum)
}

if(number1 == number2) {
    alert("Os numero inseridos são iguais")
}else{
    alert("Os numeros inseridos são diferentes")
}
