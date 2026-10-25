let fat = function (v) {
    let cont = v
    let t = 0
    for (cont; cont > 1; cont--) {
        v--
        t = v * cont
        if (cont == 1) {
            return `= ${t}`
        } else {
            return `${cont} x `
        }
    }
}

console.log(fat(5))