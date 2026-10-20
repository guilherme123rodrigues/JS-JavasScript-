function clicar() {
    if (numero.value.length == 0) {
        alert('[ERRO] campo não preenchido.')
    } else {

        let numero = window.document.querySelector('#numero')
        let tabuada = window.document.querySelector('#tabe')
        let cont = 0

        tabuada.innerHTML = ''

        for (cont; cont <= 10; cont++) {
            tabuada.innerHTML += `${numero.value}x${cont}=${Number(numero.value) * cont}\n`
        }
    }
}

function selecionar() {
    let tabuda = window.document.querySelector('#tabe')

    tabuda.style.backgroundColor = 'blue'
}