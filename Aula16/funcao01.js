function acao(n) {
    if (n % 2 == 0) {
        return 'Par!'
    } else {
        return 'ímpar!'
    }
}

let num = 12843
let resp = acao(num)

console.log(`O valor ${num} é ${resp}`)