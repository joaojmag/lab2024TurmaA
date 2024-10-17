//SOME
const p_array = document.querySelector("#array")
const btnVerificar = document.getElementById("btnVerificar")
const resultado = document.querySelector("#resultado")

const elementosArray = [10,6,4,15,3,10,15,19]
//const elementosArray = [30,18,26,45,19,21]
p_array.innerHTML = "[" + elementosArray + "]"

btnVerificar.addEventListener("click", (evt)=>{
    const cs = elementosArray.some((el,i)=>{
        if(el < 18){
            resultado.innerHTML = "Array não conforme na posição: " + i
        }
       return  el >= 18
    })
    if(cs){
        resultado.innerHTML = "ok"
    }
    //console.log(cs);
})
