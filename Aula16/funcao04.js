let resp = function (v) {
    let cont = v
    let t = 1
    let vetor = []
    for (cont; cont >= 1; cont--) {
        t *= cont
        if (cont == 1) {
            vetor.push(`${cont} = ${t}`)
        } else {
            vetor.push(`${cont} x `)
        }
    }
    return vetor
}

console.log(resp(5).join(''))
