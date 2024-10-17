
//filter
//const filtroMaior18 = (valor,index, array)=> {}

const idades = [5, 10,15,20,25,30,35,40,45,50]
const maior = idades.filter((valor)=> {
    if(valor >= 18)
        return valor
})
const  menor = idades.filter((valor)=>{
    if(valor <= 18)
        return valor
})

console.log(idades);
console.log(maior);
console.log(menor);