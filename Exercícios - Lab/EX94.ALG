Algoritmo "EX94"

//94) [DESAFIO] Desenvolva um aplicativo que tenha um procedimento chamado
//Fibonacci() que recebe um único valor inteiro como parâmetro, indicando quantos
//termos da sequência serão mostrados na tela. O seu procedimento deve receber
//esse valor e mostrar a quantidade de elementos solicitados.
//Obs: Use os exercícios 70 e 75 para te ajudar na solução
//Ex:
//Fibonacci(5) vai gerar 1 >> 1 >> 2 >> 3 >> 5 >> FIM
//Fibonacci(9) vai gerar 1 >> 1 >> 2 >> 3 >> 5 >> 8 >> 13 >> 21 >> 34 >>FIM

var
   cont, num1, num2: Inteiro

//Procedimentos

Procedimento Break()
Inicio
      EscrevaL(" ")

FimProcedimento

Procedimento NavBar()
Inicio
      LimpaTela
      EscrevaL (" _________________________________________" )
      EscrevaL ("|                                         |")
      EscrevaL ("| Ao chamar o Procedimento Fibonacci()... |")
      EscrevaL ("|_________________________________________|")
      Break()

FimProcedimento

Procedimento Fibonacci(i : Inteiro)
Inicio
      num1 <- 0
      num2 <- 1
      Escreva("1 >>")
      Para cont <- 1 ate i -1 Faca

           cont <- num1 + num2
           Escreva(cont, " >> ")
           num1 := num2
           num2 := cont
      FimPara

      Escreva ( "FIM" )
      Break()

FimProcedimento

Inicio
      NavBar()
      
      Fibonacci(5)

fimalgoritmo