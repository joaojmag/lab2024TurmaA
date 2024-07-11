Algoritmo "GUANABARA_11.2"

var

   cont, num : Inteiro

inicio

      EscrevaL ("-----------------------------")
      EscrevaL ("NÚMEROS PARES ATÉ O ESCOLHIDO")
      EscrevaL ("-----------------------------")
      EscrevaL (" ")

      Escreva ("DIGITE UM NÚMERO: ")
      Leia(num)

      Se( num % 2 = 1) entao
          num <- num -1
      FimSe

      Para cont <- num ate 0 passo -2 faca
           EscrevaL(cont)
      FimPara

fimalgoritmo