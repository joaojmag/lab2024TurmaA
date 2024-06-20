Algoritmo "13-GUANABARA"

//Aula #13 Guanabara "Soma com Função Guanabara"

var
   num1, num2, sum : Inteiro

//Procedimentos

Procedimento NavBar()
Inicio
      LimpaTela
      EscrevaL (" ____________________________" )
      EscrevaL ("|                            |")
      EscrevaL ("|   Funçao Somar Guanabara   |")
      EscrevaL ("|____________________________|")
      EscrevaL (" ")

FimProcedimento

//Funções

Funcao Soma(x, y: Inteiro) : Inteiro
Inicio
      Retorne x + y

FimFuncao

Inicio
      NavBar()

      Escreva("Digite o Primeiro Valor: ")
      Leia (num1)
      Escreva("Digite o Segundo Valor: ")
      Leia (num2)
      
      sum := Soma(num1,num2)
      EscrevaL("A Soma entre", num1, " e", num2, " é", sum)

fimalgoritmo