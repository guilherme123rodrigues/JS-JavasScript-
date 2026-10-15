function confirmar() {
    let inicio = window.document.getElementById('inicio')
    let fim = window.document.getElementById('fim')
    let passo = window.document.getElementById('passo')
    let msg = window.document.getElementById('msg')

    msg.textContent = 'Preparando contagem...'

    if (inicio.value.length == 0 && fim.value.length == 0 && passo.value.length == 0) {
        alert('[ERRO] campos não preenchidos.')
    } else if (inicio.value.length == 0) {
        msg.textContent = '[Início] não foi especificado, impossive contar!'
    } else if (fim.value.length == 0) {
        fim.value = 10
        if (passo.value.length == 0) {
            passo.value = 1
            msg.textContent = '[Fim e Passo] não foi especificado, então terminará em 10 e passo será de 1 em 1: '
        } else {
            msg.textContent = '[Fim] não foi especificado, então terminará em 10: '
        }
    } else if (passo.value.length == 0 || passo.value <= 0) {
        passo.value = 1
        msg.textContent = '[Passo] não foi especificado corretamente, então será de 1 em 1: '
    }

    let i = Number(inicio.value)
    let final = Number(fim.value)
    let incremento = Number(passo.value)


    if (inicio.value.length != 0 && fim.value.length != 0 && passo.value.length != 0) {

        if (i < final) {
            for (i; i <= final; i += incremento) {
                if (i != final) {
                    msg.innerHTML += `<b style="color: blue">${i}</b> 👉 `
                } else {
                    msg.innerHTML += `<b style="color: blue">${i}</b> 🏁 `

                }
            }
        } else if (i > final) {
            for (i; i >= final; i -= incremento) {
                if (i != final) {
                    msg.innerHTML += `<b style="color: blue">${i}</b> 👉 `
                } else {
                    msg.innerHTML += `<b style="color: blue">${i}</b> 🏁 `
                }
            }
        }
    }
}
