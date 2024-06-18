Algoritmo "11.2-GUANABARA"

//Aula #11.2 Guanabara "Mostrando todos os nº pares até o nº Escolhido"

var

   cont, num : Inteiro

inicio

      EscrevaL (" ____________________________" )
      EscrevaL ("|                            |")
      EscrevaL ("| Números Pares até Digitado |")
      EscrevaL ("|____________________________|")
      EscrevaL (" ")

      Escreva ("Digite um número: ")
      Leia(num)
      
      Se( num % 2 = 1) entao
          num <- num -1
      FimSe
      
      Para cont <- num ate 0 passo -2 faca
           EscrevaL(cont)
      FimPara

fimalgoritmo