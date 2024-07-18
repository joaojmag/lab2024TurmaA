Algoritmo "84"
var
   nome: vetor [1..9] de caractere
   idade: vetor [1..9] de inteiro
   indice: inteiro

Inicio

Para indice de 1 ate 3 Faca
      Escreva("Digite o nome da ", indice, "o. pessoa: ")
      Leia(nome[indice])
      Escreva("Digite a idade da ", indice, "o. pessoa: ")
      Leia(idade[indice])
      Escreval("")
FimPara

   Escreval("Pessoas menores de idade:")
   Para indice de 1 ate 9 Faca
      Se idade[indice] < 18 Entao
         Escreval(nome[indice], " tem ", idade[indice], " anos.")
      FimSe
   FimPara
FimAlgoritmo

