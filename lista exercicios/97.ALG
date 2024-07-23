algoritmo "97"
var
num1, num2, num3, m,maiorNumero: real

funcao Maior(n1,n2,n3: real): real

inicio

     maiorNumero <- n1
    se n2 > maiorNumero entao
        maiorNumero <- n2
    fimse
    se n3 > maiorNumero entao
        maiorNumero <- n3
    fimse
    retorne maiorNumero
fimfuncao

inicio

    escreva("Digite o primeiro número: ")
    leia(num1)
    escreva("Digite o segundo número: ")
    leia(num2)
    escreva("Digite o terceiro número: ")
    leia(num3)

      m <- Maior(num1, num2, num3)

escreval(m)
    fimalgoritmo
