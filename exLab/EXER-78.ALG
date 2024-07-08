Algoritmo "Exer-78"

Var
posicao: vetor[1..15] de inteiro
contador, numero: inteiro
Inicio
   escreval ("VETORES - MULTIPLOS DE 10")

   para contador de 1 ate 15 faca
      escreval ("Digite o ",contador, "° número")
      leia (numero)

      posicao[contador] <-  numero
   fimPara
   
   limpaTela
   para contador de 1 ate 15  faca
      se (posicao[contador] % 10 = 0) entao
         escreval ("Valor Multiplo de 10 na Posição: " , contador)
      fimSe
   fimPara


Fimalgoritmo