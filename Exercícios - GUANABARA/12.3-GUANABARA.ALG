Algoritmo "12.3-GUANABARA"

//Aula #12.3 Guanabara "Sequência de Fibonacci"

var
   c, num1, num2 : Inteiro

//Procedimentos

Procedimento NavBar()
Inicio
      LimpaTela
      EscrevaL (" ____________________________" )
      EscrevaL ("|                            |")
      EscrevaL ("|   Sequência de Fibonacci   |")
      EscrevaL ("|____________________________|")
      EscrevaL (" ")

FimProcedimento
 //var retorna o valor modificado substituindo quem o informou
//sem var a e b só calculam
Procedimento ProximoFibonacci(var a, b: Inteiro)

var c : Inteiro

Inicio
      c := a + b
      Escreva (c)
      a := b
      b := c

FimProcedimento

Inicio
      NavBar()
      
      num1 <- 0
      Escreva (num1)
      num2 := 1
      Escreva (num2)

      Para c:= 3 ate 10 faca
           ProximoFIbonacci(num1,num2)
      FimPara

fimalgoritmo
