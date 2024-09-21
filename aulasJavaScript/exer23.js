// Parâmetros REST em função

function soma(...valores) {
    let resp = 0
    for (let termos of valores) {
        resp += termos
    }
    return resp
}

console.log(soma(10, 15, 20));
