algoritmo "exercicio_83"
var

   sorteio: vetor[0..20] de inteiro
   num, cont, aux: inteiro


inicio

      Escreval("NUMEROS ALEATÓRIOS FORA DE ORDEM.")
      Escreval("------------------------------")

      Para cont de 1 ate 20 faca
           sorteio[cont] <- randi(99)
      fimpara

      Para cont de 1 ate 20 faca
           Escreva("")
           Escreva(" {", sorteio[cont], " }")
      fimpara

      Escreval("")
      Escreval("NUMEROS ALEATÓRIOS EM ORDEM.")
      Escreval("------------------------------")

      Para cont <- 1 ate 19 faca
           Para num <- cont+1 ate 20 faca
                se (sorteio[cont] > sorteio[num]) entao
                   aux <- sorteio[cont]
                   sorteio[cont] <- sorteio[num]
                   sorteio[num] <- aux
                fimse
           fimpara
      fimpara
      
      Para cont <- 1 ate 20 faca
           Escreva(" {", sorteio[cont], " }")
      fimpara

      Escreval("")
      Escreval("")


fimalgoritmo