function carregar() {
    let mensagem = window.document.querySelector('#msg')
    let imagem = window.document.querySelector('#imagem')
    let titulo = window.document.querySelector("#titulo")
    let data = new Date()
    let horas = data.getHours()
    let minutos = data.getMinutes()
    
    if (horas >= 1 && horas < 12) {
        titulo.textContent = 'BOM DIA!'
        imagem.src = "imagens/manhã.jpg"
        window.document.body.style.backgroundColor = 'yellow'
        mensagem.textContent = `Agora são ${horas} horas e ${minutos} minutos.`
    } else if (horas >= 12 && horas <= 18) {
        titulo.textContent = 'BOA TARDE!'
        imagem.src = "imagens/tarde.jpg"
        window.document.body.style.backgroundColor = 'blue'
        mensagem.textContent = `Agora são ${horas} horas e ${minutos} minutos.`
    } else {
        titulo.textContent = 'BOA NOITE!'
        imagem.src = "imagens/noite.jpg"
        window.document.body.style.backgroundColor = 'black'
        mensagem.textContent = `Agora são ${horas} horas e ${minutos} minutos.`
    }
}