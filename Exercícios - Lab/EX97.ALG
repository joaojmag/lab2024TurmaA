Algoritmo "EX97"

//97) Refaça o exercício 91, só que agora em forma de função Maior(), mas faça uma
//adaptação que vai receber TRÊS números como parâmetro e vai retornar qual foi o
//maior entre eles.

var
   maiorNum, num1, num2, num3 : Real

//Procedimentos

Procedimento Break()
Inicio
      EscrevaL(" ")

FimProcedimento

Procedimento NavBar()
Inicio
      LimpaTela
      EscrevaL (" _______________________________" )
      EscrevaL ("|                               |")
      EscrevaL ("| Ao chamar a Função Maior()... |")
      EscrevaL ("|_______________________________|")
      Break()

FimProcedimento

//Funções

Funcao Maior(X,Y,Z: Real) : Real
Inicio

      Se ( X > Y ) e ( X > Z ) entao
         Retorne X
      FimSe

      Se ( Y > X ) e ( Y > Z ) entao
         Retorne Y
      FimSe

      Se ( Z > X ) e ( Z > Y ) entao
         Retorne Z
      FimSe

      Se ( Y = X ) e ( Z = X ) entao
         Retorne 0101
      FimSe

FimFuncao

Inicio
      NavBar()

      Escreva("Digite o 1º Número: ")
      Leia(num1)

      Escreva("Digte o 2º Número: ")
      Leia(num2)
      
      Escreva("Digte o 3º Número: ")
      Leia(num3)

      Se Maior(num1,num2,num3) = 0101 entao
         Break()
         EscrevaL(num1, num2, num3," São Iguais")
      Senao
           maiorNum <- Maior(num1,num2,num3)
           Break()
           EscrevaL("O Maior número entre: ", num1, num2, num3," é: ", maiorNum)
      FimSe

fimalgoritmo