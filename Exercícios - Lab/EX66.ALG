Algoritmo "Ex66"

//66) Escreva um programa que leia um número qualquer e mostre a tabuada desse
//número, usando a estrutura “para”.
//Ex: Digite um valor: 5
//5 x 1 = 5
//5 x 2 = 10
//5 x 3 = 15 ...

var
   num, tabu, resul : Inteiro


//Procedimentos

Procedimento NavBar()
Inicio
      LimpaTela
      EscrevaL (" ______________________________" )
      EscrevaL ("|                              |")
      EscrevaL ("| Tabuada com o número clicado |")
      EscrevaL ("|______________________________|")
      EscrevaL (" ")

FimProcedimento

Inicio
      NavBar()

      Escreva("Digite o nº da Tabuada: ")
      Leia(num)
      EscrevaL(" ")

      Para tabu <- 1 ate 10 faca

           resul <- num * tabu
           EscrevaL(num, " x", tabu, " =", resul)
           
      FimPara

fimalgoritmo