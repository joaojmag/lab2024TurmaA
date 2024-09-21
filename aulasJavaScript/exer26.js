const soma = (...valores) => {
    const soma2 = (valores2) => {
        let resp = 0
        for (x of valores2)
            resp += x
        return resp
    }
    return soma2(valores)
}

console.log(soma(13,3,10));
