Algoritmo "EX95"

//95) Refaça o exercício 90, só que agora em forma de função Somador(), que vai
//receber dois parâmetros e vai retornar o resultado da soma entre eles para o
//programa principal.

var
   resul, num1, num2 : Inteiro

//Procedimentos

Procedimento Break()
Inicio
      EscrevaL(" ")

FimProcedimento

Procedimento NavBar()
Inicio
      LimpaTela
      EscrevaL (" ______________________________" )
      EscrevaL ("|                              |")
      EscrevaL ("| Ao chamar a Função Soma()... |")
      EscrevaL ("|______________________________|")
      Break()

FimProcedimento

//Funções

Funcao Soma(A,B: Inteiro) : Inteiro
Inicio
      Retorne A + B
FimFuncao

Inicio
      NavBar()

      Escreva("Digite o 1º Número: ")
      Leia(num1)
      
      Escreva("Digte o 2º Número: ")
      Leia(num2)
      
      resul <- Soma(num1,num2)
      
      Break()
      EscrevaL("A Soma entre:", num1, " e", num2, " é", resul)

fimalgoritmo