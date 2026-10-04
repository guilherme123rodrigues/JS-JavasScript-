function verificar() {
    let fano = window.document.querySelector("#ano_nascimento")
    let data_atual = new Date()
    let ano_atual = data_atual.getFullYear()
    let resultado = window.document.querySelector("#resultado")

    if (fano.value.length == 0 || fano.value > ano_atual) {
        window.alert('[ERRO] verifique os dados inseridos!')
    } else {
        let sexo = window.document.getElementsByName("sexo")
        let idade = ano_atual - Number(fano.value)
        let genero = ''
        let imagem = window.document.createElement('img')
        imagem.setAttribute('id', 'foto')
        imagem.setAttribute('width', '200')
        imagem.setAttribute('height', '200')

        if (sexo[0].checked) {
            genero = 'Homem'
            if (idade => 0 && idade < 10) {
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
            if (idade => 0 && idade < 10) {
                imagem.setAttribute('src', 'imagens/mulher_bebe.jpg')
            } else if (idade < 21) {
                imagem.setAttribute('src', 'imagens/mulher_adulta.jpg')
            } else if (idade < 50) {
                imagem.setAttribute('src', 'imagens/mulher_idosa.jpg')
            } else {
                imagem.setAttibute('src', 'imagens/mulher_bebe.jpg')
            }
        }
        resultado.style.textAlign = 'center'
        resultado.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        resultado.appendChild(imagem)
   }
}