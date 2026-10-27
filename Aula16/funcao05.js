// RECURÇÃO
function fatorial(n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatorial(n-1)
    }
}

let resposta = fatorial(5)

console.log(`${resposta}`)