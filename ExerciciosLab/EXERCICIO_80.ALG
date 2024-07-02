algoritmo "exercicio_80"
var

   num: inteiro
   sorteio: vetor[0..31] de inteiro
   cont: inteiro


inicio

      Para cont de 1 ate 30 faca
           sorteio[cont] <- randi(15)
      fimpara

      Escreva("DIGITE UM NÚMERO CHAVE DE 1 ATÉ 15: ")
      Leia(num)

      Para cont de 1 ate 30 faca
           Escreva("")
           Escreva(" {", sorteio[cont], " }")
      fimpara

      Escreval("")
      Escreval("")

      Para cont de 1 ate 30 faca
           se (num = sorteio[cont]) entao
              Escreval("A POSIÇÃO DO NÚMERO ALEATÓRIO É,", cont)
           fimse
      fimpara
      
      Escreval("")
      Escreval("")


fimalgoritmo