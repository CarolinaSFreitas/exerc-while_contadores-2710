const prompt = require("prompt-sync")()

console.log("Informe o nome ou 'Fim' para sair")

let aprovado = 0
let reprovado = 0

do {
    const disciplina = prompt("Nome da Disciplina: ")
    if (disciplina == "Fim" || disciplina == "fim") {
        break                     //"força" a saída de repetição
    }
    const conceito = (prompt("Conceito do Aluno (A, B, C, D): ")).toUpperCase()

    if (conceito == "A" || conceito == "B" || conceito == "C"){
        console.log(`Aprovado em ${disciplina}.`)
        aprovado = aprovado + 1
    }else {
        console.log(`Reprovado em ${disciplina}.`)
        reprovado = reprovado + 1
    }
} while (true)

console.log("-".repeat(40))
console.log(`Nº de Disciplinas Aprovado: ${aprovado}`)
console.log(`Nº de Disciplinas Aprovado: ${reprovado}`)