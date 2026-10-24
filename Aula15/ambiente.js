let num = [4, 8, 19, 0, 2] // Vetor

/*
console.log(`Nosso vetor em ordem crescente ${num.sort((a, b) => a - b)}`) // Ordem crescente
console.log(`Nosso vetor em ordem decrescente ${num.sort((a, b) => b - a)}`) // Ordeem decrescente
console.log(`Quantidade de item no vetor ${num.length}`) // Vê a quantidade de item que tem no vetor

num.unshift(100) // Coloca um valor no ínicio do vetor
num.push(109) // Coloca um valor no final do vetor

num[1] = 112 // Inserindo um valor em local especifico
*/

for (let pos in num.sort((a, b) => a - b)) {
    console.log(`Valor ${num[pos]} na posição ${num.indexOf(num[pos])}`)
}