Algoritmo "EX98"

//98) Crie um programa que tenha uma função SuperSomador(), que vai receber dois
//números como parâmetro e depois vai retornar a soma de todos os valores no
//intervalo entre os valores recebidos.
//Ex:
//SuperSomador(1, 6) vai somar 1 + 2 + 3 + 4 + 5 + 6 e vai retornar 21
//SuperSomador(15, 19) vai somar 15 + 16 + 17 + 18 + 19 e vai retornar 85

var
   num1, num2, soma, i : Inteiro

//Procedimentos

Procedimento Break()
Inicio
      EscrevaL(" ")

FimProcedimento

Procedimento NavBar()
Inicio
      LimpaTela
      EscrevaL (" ______________________________________" )
      EscrevaL ("|                                      |")
      EscrevaL ("| Ao chamar a Função SuperSomador()... |")
      EscrevaL ("|______________________________________|")
      Break()

FimProcedimento

//Funções

Funcao SuperSomador(X,Y: Inteiro) : Inteiro
Inicio

      Para i <- X ate Y Faca
           soma <- soma + i
      FimPara
      
      Retorne soma

FimFuncao

Inicio
      NavBar()

      Escreva("Digite o 1º Número: ")
      Leia(num1)

      Escreva("Digte o 2º Número: ")
      Leia(num2)

      soma <- SuperSomador(num1,num2)
      Break()
      EscrevaL("A soma de todos os números entre:", num1, " e",num2, " é:", soma)

fimalgoritmo