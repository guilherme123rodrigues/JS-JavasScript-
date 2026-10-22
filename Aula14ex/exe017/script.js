function tabuada() {
    if (numero.value.length == 0) {
        alert('[ERRO] campo não preenchido.')
    } else {
        let numero = window.document.querySelector('#numero')
        let tabuada = window.document.querySelector('#tabe')
        let cont = 0
        tabuada.innerHTML = ""
        for (cont; cont <= 10; cont++) {
            let option = window.document.createElement('option')
            option.text = `${numero.value}x${cont}=${Number(numero.value) * cont}`
            option.value = `tab${cont}`
            tabuada.appendChild(option)
        }
    }
}