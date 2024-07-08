Algoritmo "semnome"

Var
   numero, somatorio: inteiro

Inicio
   somatorio <- 0

   Escreva("Digite os números (Digite 1111 para encerrar): ")


   Enquanto numero <> 1111 Faca
      Leia(numero)
      Se numero <> 1111 Entao
         somatorio <- somatorio + numero
      FimSe
   FimEnquanto

   Escreval("O somatório dos números digitados é: ", somatorio)

FimAlgoritmo
