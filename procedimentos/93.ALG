algoritmo "93"
var
n1,n2,n3:inteiro
Procedimento Contador(A,B,C:inteiro)
inicio
Enquanto A <= B Faça
   Escreva(A)
      Se A + C <= B então
         Escreva(" >> ")
         A <- A + C
      Senão
         A <- B + 1
      FimSe
FimEnquanto
Escreva(" >> FIM")

FimProcedimento
inicio
Escreval("Digite o valor de inicio: ")
Leia(n1)
Escreval("Digite o valor do fim: ")
Leia(n2)
Escreval("Digite o valor do incremento: ")
Leia(n3)

Contador(n1,n2,n3)



fimalgoritmo