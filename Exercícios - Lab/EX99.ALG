Algoritmo "EX99"

//99) Faça um programa que possua uma função chamada Potencia(), que vai receber
//dois parâmetros numéricos (base e expoente) e vai calcular o resultado da
//exponenciação.
//Ex: Potencia(5,2) vai calcular 5² = 25

var
   num1, num2, potencial, i : Inteiro

//Procedimentos

Procedimento Break()
Inicio
      EscrevaL(" ")

FimProcedimento

Procedimento NavBar()
Inicio
      LimpaTela
      EscrevaL (" __________________________________" )
      EscrevaL ("|                                  |")
      EscrevaL ("| Ao chamar a Função Potencia()... |")
      EscrevaL ("|__________________________________|")
      Break()

FimProcedimento

//Funções

Funcao Potencia(X,Y: Inteiro) : Inteiro
var a: Inteiro
Inicio
      potencial <- 0
      
      Se ( Y = 0) entao
         potencial <- 1
         retorne potencial
      FimSe
      
      Se ( Y = 1 ) entao
         potencial <- X * 1
      FimSe
      
      Se ( Y = 2 ) entao
         potencial <- X * X
      FimSe
      
      Se ( Y >= 3 ) entao
      
         Para i <- 1 ate Y faca
                potencial <- X
                a <- X * X
                potencial <- potencial * a
         FimPara
      FimSe
      
      Retorne potencial
      
FimFuncao

Inicio
      NavBar()

      Escreva("Digite a Base: ")
      Leia(num1)

      Escreva("Digte o Expoente: ")
      Leia(num2)

      potencial <- Potencia(num1,num2)
      Break()
      EscrevaL("A potência de", num1, " elevado a",num2, " é:", potencial)

fimalgoritmo