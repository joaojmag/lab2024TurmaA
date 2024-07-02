algoritmo "exercicio_78"
var

   num: vetor[0..15] de inteiro
   cont: inteiro


inicio

      Para cont de 1 ate 15 faca
           Escreva("DIGITE O", cont, "o. NÚMERO: ")
           Leia(num[cont])
      fimpara

      Para cont de 1 ate 15 faca
           Escreval("")
           Escreva(" {", num[cont], " }")
      fimpara
      
      Escreval("")
      Escreval("")

      Para cont de 1 ate 15 faca
           se (num[cont] % 10 = 0) entao
              Escreva("VALOR MÚLTIPLO DE 10 NA POSIÇÃO,", cont)
              Escreval("")
           fimse
      fimpara
      
fimalgoritmo