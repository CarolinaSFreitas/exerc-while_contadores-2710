const prompt = require("prompt-sync")()

const num = Number(prompt("Número: "))

let divisores = 0


// i++ => i = i + 1
for (let i = 1; i <= num; i++) {
    if (num % i == 0){
        divisores = divisores + 1
    }
}
if(divisores == 2){
console.log(`${num} é primo.`)
}else{
    console.log(`${num} não é primo.`)
}


