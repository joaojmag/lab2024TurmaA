Algoritmo "Exer-79"

Var
posicao: vetor[1..5] de inteiro
contador, numero: inteiro

Inicio
   escreval ("VETORES - VALORES PARES")
   para contador de 1 ate 5 faca
      escreva ("Digite o ", contador, "° numero: ":12)
      leia (numero)
      posicao[contador] <- numero
   fimPara

   escreval()
   
   para contador de 1 ate 5 faca
      se (posicao[contador] % 2 = 0) entao
         escreval ("Valor PAR na posiçao: ", contador)
      fimSe
   fimPara
Fimalgoritmo