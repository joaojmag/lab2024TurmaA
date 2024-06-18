algoritmo "exercicio_50"
var

   sorteio, cont, divTres, maiorCinco: inteiro

inicio
      EscrevaL("SORTEADOR DE NÚMEROS.")
      Escreval("")


      Repita
            sorteio <- randi (10) + 2
            Escreva(sorteio)

            Se (sorteio % 3 = 0) e (sorteio > 5) entao
              divTres <- divTres + 1
              maiorCinco <- maiorCinco + 1
              cont <- cont + 1
            Senao
            Se (sorteio > 5) entao
              maiorCinco <- maiorCinco + 1
              cont <- cont + 1
            Senao
            Se (sorteio%3 = 0) entao
              divTres <- divTres + 1
              cont <- cont + 1
            Senao
                 cont <- cont + 1
            FimSe
            FimSe
            FimSe

      Ate (cont >= 20)

      EscrevaL("")
      EscrevaL (maiorCinco, " dos números gerados são maiores que 5!")
      EscrevaL (divTres, " dos números gerados são números divisíveis por 3!")

fimalgoritmo