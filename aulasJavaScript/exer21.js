function retorno () {
    let n1 = 5
    let n2 =15
    let resp = n1 * n2
    if (resp % 3 == 0) 
        return resp + " é multiplo de 3"
    else 
        return resp + " não é multiplo de 3"
}

console.log(retorno());
