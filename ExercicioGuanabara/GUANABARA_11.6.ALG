Algoritmo "GUANABARA_11.6"

Var
   c, num, soma, divisivelPor5, nulo, somaPar  : inteiro
   media : Real


Inicio

      Para c <- 1 ate 5 faca
           Escreva("DIGITE O",c, "º VALOR: ")
           Leia(num)

           soma <- soma + num
           media <- media + num

           se (num % 5 = 0) Entao
              divisivelPor5 <- divisivelPor5 + 1
           fimSe

           se (num = 0) Entao
              nulo <- nulo + 1
           fimSe

           se (num % 2 = 0) Entao
              somaPar <- somaPar + num
           fimSe

      FimPara

      media <- (media/5)

      Escreval("")
      EscrevaL("A SOMA DOS VALORES É: ", soma)
      EscrevaL("A MÉDIA DOS VALORES É: ", media)
      EscrevaL("DIVISIVEIS POR 5: ", divisivelPor5)
      EscrevaL("VALORES NULOS: ", nulo)
      EscrevaL("SOMA DOS VALORES PARES: ", somaPar)

fimalgoritmo