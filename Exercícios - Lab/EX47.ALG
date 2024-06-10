Algoritmo "Ex47"

//47) Desenvolva um aplicativo que mostre na tela o resultado da expressão 500 +
//450 + 400 + 350 + 300 + ... + 50 + 0

Var
   contador, soma : inteiro
inicio

      EscrevaL (" ___________________________" )
      EscrevaL ("|                           |")
      EscrevaL ("| Contador Pre-Definido 2.0 |")
      EscrevaL ("|___________________________|")
      EscrevaL (" ")

      soma <- 0
      contador <- 500
      EscrevaL(" A soma entre:")

      Enquanto ( contador >=0 ) faca

               soma <- soma + contador
               Escreva(contador, ", ")
               contador <- contador - 50
      FimEnquanto
      Escreva("é: " , soma)
fimalgoritmo