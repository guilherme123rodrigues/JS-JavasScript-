function confirmar() {
    let inicio = window.document.getElementById('inicio')
    let fim = window.document.getElementById('fim')
    let passo = window.document.getElementById('passo')
    let msg = window.document.getElementById('msg')

    if (inicio.value.length == 0 && fim.value.length == 0 && passo.value.length == 0) {
        alert('[ERRO] campos não preenchidos.')
    } else if (inicio.value.length == 0) {
        msg.textContent = '[Início] não foi especificado, impossive contar!'
    } else if (fim.value.length == 0) {
        fim.value = 10
        if (passo.value.length == 0) {
            passo.value = 1
            msg.textContent = '[Fim] não foi especificado, então terminará em 10 e passo 1 em 1: '
        } else {
            msg.textContent = '[Fim] não foi especificado, então terminará em 10: '
        }
    } else if (passo.value.length == 0) {
        passo.value = 1
        msg.textContent = '[Passo] não foi especificado, então será de 1 em 1: '
    } 
    
    if (inicio.value.length != 0 && fim.value.length != 0 && passo.value.length != 0) {
       for (i; i <= final; i += incremento) {
          msg.textContent += `${i} => `
        }
    }
}
