algoritmo "ordenacao_vetor"

var
valores: vetor[1..20] de inteiro
indice, j, temp: inteiro

inicio
para indice de 1 ate 20 faca
      valores[i] <- randi(99)
fimpara

escreval("Números gerados:")
para i de 1 ate 20 faca
      escreva(valores[i], " ")
fimpara
escreval("")

   //ordem crescente
para i de 1 ate 19 faca
      para j de 1 ate 20 - i faca
         se valores[j] > valores[j + 1] entao
            // Trocar
            temp <- valores[j]
            valores[j] <- valores[j + 1]
            valores[j + 1] <- temp
         fimse
      fimpara
fimpara
escreval("Números em ordem crescente:")
   para i de 1 ate 20 faca
      escreva(valores[i], " ")
   fimpara
   escreval("")

fimalgoritmo




fimalgoritmo