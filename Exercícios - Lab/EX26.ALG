Algoritmo "Ex26"

//26) Escreva um algoritmo que leia dois números inteiros e compare-os, mostrando
//na tela uma das mensagens abaixo:
//- O primeiro valor é o maior
//- O segundo valor é o maior
//- Não existe valor maior, os dois são iguais
var

   num1, num2 : Inteiro

inicio

      EscrevaL (" ______________________________________" )
      EscrevaL ("|                                      |")
      EscrevaL ("| Comparação entre 2 Números Inteiros. |")
      EscrevaL ("|______________________________________|")
      EscrevaL (" ")
      
      Escreva("Digite o primeiro dígito: ")
      Leia(num1)

      Escreva("Digite o segundo dígito: ")
      Leia(num2)

      Se ( num1 > num2) entao
      
         EscrevaL("")
         EscrevaL ("O número:", num1, " que é o 1° Valor é maior que:", num2)
      senao
           Se ( num1 < num2) entao
           
              EscrevaL("")
              EscrevaL ("O número:", num2, " que é o 2° Valor é maior que:", num1)
           Senao
              EscrevaL("")
              EscrevaL("Ambos os números:", num1, " e", num2, " são iguais.")
           FimSe
      FimSe

fimalgoritmo