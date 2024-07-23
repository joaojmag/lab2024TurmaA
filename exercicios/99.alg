algoritmo "semnome"
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
Escreval("Digite a base: ")
Leia(base)
Escreva("Digite o expoente: ")
Leia(expoente)

resultado <- Potencia(base, expoente)

Escreval(resultado)
Escreva("O resultado de ", base, , expoente, " é: ", resultado)

fimalgoritmo
