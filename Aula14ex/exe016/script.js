function confirmar() {
    let inicio = window.document.getElementById('inicio')
    let fim = window.document.getElementById('fim')
    let passo = window.document.getElementById('passo')
    let msg = window.document.getElementById('msg')

    let i = Number(inicio.value)
    let final = Number(fim.value)
    let incremento = Number(passo.value)

    if (inicio.value.length == 0 && fim.value.length == 0 && passo.value.length == 0) {
        alert('[ERRO] campos não preenchidos.')
    } else if (inicio.value.length == 0) {
        msg.textContent = '[Início] não foi especificado, impossive contar!'
    } else if (fim.value.length == 0) {
        final = 10
        if (passo.value.length == 0) {
            incremento = 1
            alert('[Fim e Passo] não foi especificado, então terminará em 10 e passo será de 1 em 1:')
        } else {
            alert('[Fim] não foi especificado, então terminará em 10:')
        }
    } else if (passo.value.length == 0 || passo.value <= 0) {
        incremento = 1
        alert('[Passo] não foi especificado corretamente, então será de 1 em 1:')
    }

    msg.innerHTML = 'Contando...<br>'

    if (inicio.value.length != 0 && fim.value.length != 0 && passo.value.length != 0) {

        if (i < final) {
            for (i; i <= final; i += incremento) {
                if (i + incremento > final) {
                    msg.innerHTML += `<b style="color: blue">${i}</b> \u{1F3C1} `
                } else {
                    msg.innerHTML += `<b style="color: blue">${i}</b> \u{1F449}`
                }
            }
        } else if (i > final) {
            for (i; i >= final; i -= incremento) {
                if (i - incremento < final) {
                    msg.innerHTML += `<b style="color: blue">${i}</b> \u{1F3C1} `
                } else {
                    msg.innerHTML += `<b style="color: blue">${i}</b> \u{1F449} `
                }
            }
        } else {
            msg.innerHTML += `<b style="color: blue">${i}</b> \u{1F3C1} `
        }
    }
}
