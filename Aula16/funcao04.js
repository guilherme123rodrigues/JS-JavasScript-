function fat(v) {
    let cont = v
    let t = 0
    let s = cont
    vetor = []
    for (cont; cont >= 1; cont--) {
        v--
        if (v >= 1) {
            t = v * s
            s = t
        }

        if (cont == 1) {
            vetor.push(`${cont} = ${t}`)
        } else {
            vetor.push(`${cont} x `)
        }

    }
    return vetor
}


let resp = fat(5)

for (let num in resp) {
    console.log(`${resp[num]}`)
}
