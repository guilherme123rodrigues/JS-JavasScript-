function verificar() {
    let fano = window.document.querySelector(#fano)
    let data_atual = new Date()
    let ano_atual = data_atual.getFullyear() 
    let idade = ano_atual - Number(fano.value)

    if (fano.value.leatgh || fano.value > ano_atual) {
        window.dociment.alert('[ERRO] Verifique os dados inseridos')
    }
}
