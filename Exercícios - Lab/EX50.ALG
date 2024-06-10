Algoritmo "Ex50"

//50) Desenvolva um programa que faça o sorteio de 20 números entre 0 e 10 e
//mostre na tela:
//a) Quais foram os números sorteados
//b) Quantos números estão acima de 5
//c) Quantos números são divisíveis por 3

Var
   gerado, cont, maiorCinco, divTres : Inteiro

inicio

      EscrevaL (" _____________________________________" )
      EscrevaL ("|                                     |")
      EscrevaL ("| Sorteio de 20 números entre 0 e 10  |")
      EscrevaL ("|_____________________________________|")
      EscrevaL (" ")

      Escreva(" Os Números Gerados foram:")
      Repita
            gerado <- randi(20) + 1
            Escreva(gerado)

            Se (gerado % 3 = 0) entao

               divTres <- divTres + 1
               cont <- cont + 1

            Senao
            Se ( gerado > 5 ) entao
            
                 maiorCinco <- maiorCinco + 1
                 cont <- cont + 1
                 
            Senao
                 cont <- cont + 1
                 
            FimSe
            FimSe

      Ate( cont >= 20 )

      EscrevaL("")
      EscrevaL (maiorCinco, " dos números gerados são maiores que 5!")
      EscrevaL (divTres, " dos números gerados são números divisíveis por 3!")

fimalgoritmo
