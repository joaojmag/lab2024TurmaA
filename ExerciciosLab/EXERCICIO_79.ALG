algoritmo "exercicio_79"
var

   num: vetor[0..10] de inteiro
   cont: inteiro


inicio

      Para cont de 1 ate 10 faca
           Escreva("DIGITE O", cont, "o. NÚMERO: ")
           Leia(num[cont])
      fimpara

      Para cont de 1 ate 10 faca
           Escreval("")
           Escreva(" {", num[cont], " }")
      fimpara

      Escreval("")
      Escreval("")

      Para cont de 1 ate 10 faca
           se (num[cont] % 2 = 0) entao
              Escreva("VALORES PAREES NA POSIÇÃO,", cont)
              Escreval("")
           fimse
      fimpara

fimalgoritmo