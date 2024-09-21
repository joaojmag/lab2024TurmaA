let n1 = true

function mudarTexto() {
    let d1 = document.getElementById("d1")
    let d2 = document.getElementById("d2")
    let d3 = document.getElementById("d3")
    
    if (n1){
        d1.innerHTML = "casa"
        d2.innerHTML = "carro"
        d3.innerHTML = "moto"
        n1 = false
    }else {
        d1.innerHTML = "aviao"
        d2.innerHTML = "lancha"
        d3.innerHTML = "jetski"
        n1 = true
    }

}
