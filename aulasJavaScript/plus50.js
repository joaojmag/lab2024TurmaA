let fatorial = 5
let valores = []
let result

for (let i = 1; i <= fatorial ; i++) {
    valores[i ] = i
    result = valores.reduce((ant, atu)=> {
        return ant*atu
    })

}
console.log(result);