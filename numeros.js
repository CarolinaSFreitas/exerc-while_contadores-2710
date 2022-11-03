const prompt = require("prompt-sync")()

let soma = 0
let quant = 0
let maior = 0

console.log("Informe os números ou 0 para sair.")

do {
    const num = Number(prompt("Número: "))
    if (num == 0) {
        break
    }
    soma = soma + num
    quant = quant + 1
    if (num > maior) {
        maior = num
    }
} while (true)

console.log("-".repeat(30))
console.log(`Soma dos números: ${soma}`)
console.log(`Quantidade dos números: ${quant}`)
console.log(`Maior número: ${maior}`)
