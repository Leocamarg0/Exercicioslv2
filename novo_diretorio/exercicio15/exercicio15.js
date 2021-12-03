var texto = document.getElementById(`texto`).textContent
var tipo_texto = typeof(texto)
var teste = document.getElementById("tipo_txt")
console.log(teste.textContent)
teste.textContent = tipo_texto
console.log(teste.textContent)
