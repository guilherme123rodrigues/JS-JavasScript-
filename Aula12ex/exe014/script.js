function verificar() {
    let fano = window.document.querySelector('#fano')
    let resultado = window.document.querySelector('#resultado')
    let data_atual = new Date()
    let ano_atual = data_atual.getFullYear() 

    if (fano.value.length == 0 ||Number(fano.value) > ano_atual) {
        alert('[ERRO] Verifique os dados inseridos')
    } else {
        let sexo = window.document.getElementsByName('sexo')
        let idade = ano_atual - Number(fano.value)
        let genero = ''
        let imagem = window.document.createElement('img')
        imagem.setAttribute('id', 'foto')
        imagem.setAttribute('width', '200')
        imagem.setAttribute('height', '200')

        if (sexo[0].checked) {
            genero = 'Homem'

            if (idade >= 0 && idade < 10) {
                imagem.setAttribute('src', 'imagens/homem_bebe.jpg')
            } else if (idade < 21) {
                imagem.setAttribute('src', 'imagens/homem_jovem.jpg')
            } else if (idade < 50) {
                imagem.setAttribute('src', 'imagens/homem_adulto.jpg')
            } else {
                imagem.setAttribute('src', 'imagens/homem_idoso.jpg')
            }
        } else if (sexo[1].checked) {
            genero = 'Mulher'

            if (idade >= 0 && idade < 10) {
                imagem.setAttribute('src', 'imagens/mulher_bebe.jpg')
            } else if (idade < 21) {
                imagem.setAttribute('src', 'imagens/mulher_jovem.jpg')
            } else if (idade < 50) {
                imagem.setAttribute('src', 'imagens/mulher_adulta.jpg')
            } else {
                imagem.setAttribute('src', 'imagens/mulher_idosa.jpg')
            }
        }

        resultado.style.textAlign = 'center'
        resultado.innerHTML = `Detectamos ${genero} com idade ${idade} anos.`
        resultado.appendChild(imagem)
    }
}
