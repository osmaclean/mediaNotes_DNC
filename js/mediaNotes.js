
function calcularMedia() {

    // const armazenando os parâmetros da URL, após o usuário preencher
    // o input
    const url = new URLSearchParams(window.location.search)

    let nota1 = url.get("n1") // Pegando o primeiro parâmetro
    let nota2 = url.get("n2") // Pegando o segundo parâmetro

    let media = (parseInt(nota1) + parseInt(nota2)) / 2

    document.getElementById("media").value = media;

    if (media >= 6) {
        document.getElementById("status").innerHTML = "Aprovado"
        document.getElementById("status").style.color = "green"
    } else {
        document.getElementById("status").innerHTML = "Reprovado"
        document.getElementById("status").style.color = "redzzz"
    }

}