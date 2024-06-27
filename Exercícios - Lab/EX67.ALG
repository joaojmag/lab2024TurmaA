Algoritmo "Ex67"

//67) Faça um programa usando a estrutura “para” que leia um número inteiro
//positivo e mostre na tela uma contagem de 0 até o valor digitado: Ex:
//Digite um valor: 9
//Contagem: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, FIM!

var
   num, i : Inteiro


//Procedimentos

Procedimento NavBar()
Inicio
      LimpaTela
      EscrevaL (" ______________________________" )
      EscrevaL ("|                              |")
      EscrevaL ("| contagem até o num escolhido |")
      EscrevaL ("|______________________________|")
      EscrevaL (" ")

FimProcedimento

Inicio
      NavBar()

      Escreva("Digite até onde deseja contar: ")
      Leia(num)
      EscrevaL(" ")

      Para i <- 0 ate num faca

           Escreva(i, ",")
           
      FimPara
      
      Escreva(" FIM!" )

fimalgoritmo