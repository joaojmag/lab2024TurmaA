function retorno (n1=0, n2=0) {
    let resp = n1 * n2
    if (resp % 3 == 0) 
        return resp + " é multiplo de 3"
    else 
        return resp + " não é multiplo de 3"
}

console.log(retorno(15, 5));
console.log(retorno(15, 15));
console.log(retorno(15, 78));
console.log(retorno(1, 1));
console.log(retorno());