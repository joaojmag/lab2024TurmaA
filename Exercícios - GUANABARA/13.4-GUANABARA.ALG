Algoritmo "13.4-GUANABARA"

//Aula #13.4 Guanabara "Sequência de Fibonacci"

var
   c, num1, num2, num3 : Inteiro

//Procedimentos

Procedimento NavBar()
Inicio
      LimpaTela
      EscrevaL (" ____________________________" )
      EscrevaL ("|                            |")
      EscrevaL ("|   Fibonacci usando Função  |")
      EscrevaL ("|____________________________|")
      EscrevaL (" ")

FimProcedimento

//Funções

Funcao ProximoFibonacci(var n1, n2: Inteiro): Inteiro

var
   n3 : Inteiro

Inicio
      n3 := n1 + n2
      n1 := n2
      n2 := n3
      Retorne n3

FimFuncao

Inicio
      NavBar()

      num1 <- 0
      EscrevaL (num1)
      num2 := 1
      EscrevaL (num2)

      Para c:= 3 ate 5 faca
           num3 := ProximoFIbonacci(num1,num2)
           EscrevaL(num3)
      FimPara

fimalgoritmo
