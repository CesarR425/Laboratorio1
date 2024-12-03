console.log("Estoy en js")

let $resultado = document.getElementById("resul")

function fsumar() {
    let num1 = parseInt(n1.value)
    let num2 = parseInt(n2.value)
    //console.log(typeof(num1))
    $resultado.innerHTML = "La suma es:" + (num1+num2)
}
function frestar() {
    let num1 = parseInt(n1.value)
    let num2 = parseInt(n2.value)
     $resultado.innerHTML ="La resta es:" + (num1-num2)
}
function fmultiplicar() {
    let num1 = parseInt(n1.value)
    let num2 = parseInt(n2.value)
     $resultado.innerHTML="La multiplicacion es:" + (num1*num2)
}
function fdividir() {
    let num1 = parseInt(n1.value)
    let num2 = parseInt(n2.value)
    if(num2===0)
    { $resultado.innerHTML="La Division entre cero (0) no es posible"}
    else{ $resultado.innerHTML="La divsion es:" + (num1/num2)}
}