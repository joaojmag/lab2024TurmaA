Algoritmo "Exer-83"

Var
contador, sorteio: inteiro
segundoCont, auxiliar: inteiro
posicao: vetor[1..20] de inteiro

Inicio
   escreval ("VETORES - DESAFIO")
   

   para contador de 1 ate 20 faca
      sorteio <- (randi(99))
      posicao[contador] <- sorteio
   fimPara
   
   para contador de 1 ate 20 faca
      escreval (posicao[contador])
   fimPara
   
   escreval()
   escreval ("________________")
   escreval ("A ordem crescente dos números sorteados é:")
   escreval ("________________")
   para contador de 1 ate 19 faca
      para  segundoCont <- contador + 1 ate 20 faca
         se ( posicao[contador] > posicao[segundoCont] ) entao
            auxiliar              <-    posicao[contador]
            posicao[contador]     <-    posicao[segundoCont]
            posicao[segundoCont]  <-    auxiliar
         fimSe
      fimPara
   fimPara

   para contador de 1 ate 20 faca
      escreval ("[", posicao[contador], "]")
   fimPara

   // escreva (posicao[5])
Fimalgoritmo