algoritmo "99"


var
i,base, expoente, resultado,p:inteiro


funcao Potencia( base,expoente:inteiro ):inteiro



inicio
    p <- 1
    para i de 1 ate expoente faca
        p  <- ( p  *  base)
        
        

    fimpara

    retorne p


fimfuncao


inicio

    escreva("Digite a base: ")
    leia(base)
    escreva("Digite o expoente: ")
    leia(expoente)


    resultado <- Potencia(base, expoente)

       escreval(resultado)
    escreva("O resultado de ", base, , expoente, " é: ", resultado)
fimalgoritmo
