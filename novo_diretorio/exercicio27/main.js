function mostrar_tipo(){
    let num1 = 5
    let num2 = 9

    console.log("O",num1,"e maior que", num2, "e ambos são do tipo: ", typeof(num1,num2))
}
if (num1>num2) {
    mostrar_tipo()
} else {
    console.log("o numero ",num1, "nao e maior que ",num2)
}