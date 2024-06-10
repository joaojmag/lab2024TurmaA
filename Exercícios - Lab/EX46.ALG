Algoritmo "Ex46"

//46) Crie um programa que calcule e mostre na tela o resultado da soma entre 6 +
//8 + 10 + 12 + 14 + ... + 98 + 100.

Var
   contador, soma : inteiro
inicio

      EscrevaL (" _______________________" )
      EscrevaL ("|                       |")
      EscrevaL ("| Contador Pre-Definido |")
      EscrevaL ("|_______________________|")
      EscrevaL (" ")

      soma <- 0
      contador <- 6
      EscrevaL(" A soma entre:")
      
      Enquanto ( contador <= 99 ) faca
      
               soma <- soma + contador
               Escreva(contador, ", ")
               contador <- contador + 2
      FimEnquanto
      Escreva("é: " , 100 + soma)
fimalgoritmo