Algoritmo "10.4-GUANABARA"

//Aula #10.4 Guanabara "É Número Primo?"

var

   num, cont, contaDiv : Inteiro

inicio

      EscrevaL (" _____________________________" )
      EscrevaL ("|                             |")
      EscrevaL ("| Verificador de Número Primo |")
      EscrevaL ("|_____________________________|")
      EscrevaL (" ")

      cont <- 1
      contaDiv <- 0
      
      Escreva(" Digite um número: ")
      Leia(num)
      
      Repita
            Se (num % cont = 0) entao
               contaDiv <- contaDiv + 1
            FimSe
            cont <- cont + 1
      Ate( cont > num )
      Se (contaDiv > 2 ) entao
         EscrevaL ("O número",num, " não é Primo!")
      Senao
           EscrevaL ("O número", num, " é Primo!")
      FimSe

fimalgoritmo
