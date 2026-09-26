function verificar() {
    let ano_nascimetno = window.document.querySelector("#ano_nascimento")
    let mensagem = window.document.querySelector("#msg")
    let sexo = window.document.querySelector("#sexo")
    let data = new Date()
    let ano = data.getFullYear()
    let idade = ano - Number(ano_nascimetno)

    if (Number(ano_nascimetno.value) < 1970) {
        mensagem.textContent = `Um ${sexo[0].value} que nasceu em ${ano_nascimetno} tem ${idade} anos`
    }
}