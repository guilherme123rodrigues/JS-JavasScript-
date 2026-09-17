function carregar() {
    let mensagem = window.document.querySelector('#msg')
    let imagem = window.document.querySelector('#imagem')
    let data = new Date()
    let horas = data.getHours()
    let minutos = data.getMinutes()
    
    if (horas >= 1 && horas < 12) {
        imagem.src = "../imagens/manhã.jpg"
        window.document.body.style.backgroundColor = 'yellow'
        mensagem.textContent = `Agora são ${horas} horas e ${minutos} minutos. Bom dia!`
    } else if (horas >= 12 && horas <= 18) {
        imagem.src = "../imagens/tarde.jpg"
        window.document.body.style.backgroundColor = 'blue'
        mensagem.textContent = `Agora são ${horas} horas e ${minutos} minutos. Boa Tarde!`
    } else {
        imagem.src = "../imagens/noite.jpg"
        window.document.body.style.backgroundColor = 'green'
        mensagem.textContent = `Agora são ${horas} horas e ${minutos} minutos. Boa noite!`
    }
}