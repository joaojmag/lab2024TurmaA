Algoritmo "GUANABARA_11.1"

var

   num, cont, soma : Inteiro

inicio

      EscrevaL ("----------------------")
      EscrevaL ("SOMADOR DO GUANABARA")
      EscrevaL ("----------------------")
      EscrevaL (" ")

      soma <- 0

      Para cont <- 1 ate 5 faca
           EscrevaL("DIGITE UM VALOR: ")
           Leia(num)
           soma <- soma + num
      FimPara

      EscrevaL ("A SOMA DOS VALORES É:", soma)

fimalgoritmo