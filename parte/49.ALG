algoritmo "SemNome"

var
numero, pares, impares, contador: inteiro

inicio
   pares <- 0
   impares <- 0
   contador <- 1

Enquanto contador <= 6 faca
 Escreva("Digite o ", contador, "º número inteiro: ")
 Leia(numero)


   Se numero % 2 = 0 entao
    pares <- pares + 1
   Senao
    impares <- impares + 1
   FimSe

      contador <- contador + 1
FimEnquanto


Escreval("Quantidade de números pares: ", pares)
Escreval("Quantidade de números ímpares: ", impares)

fimalgoritmo
