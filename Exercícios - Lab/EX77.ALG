Algoritmo "Ex77"

//77) Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. No
//final, mostre uma listagem com todos os nomes informados, na ordem inversa
//daquela em que eles foram informados.

Var
   arrayNome : vetor[0..6] de Caracter
   cont : Inteiro

//Procedimentos

Procedimento NavBar()
Inicio
      LimpaTela
      EscrevaL (" __________________________" )
      EscrevaL ("|                          |")
      EscrevaL ("|  Listando Nomes Inverso  |")
      EscrevaL ("|__________________________|")
      EscrevaL (" ")

FimProcedimento

Inicio
      NavBar()

      Para cont <- 0 ate 6 faca

         Escreva("Digite seu nome: ")
         Leia(arrayNome[cont])

      FimPara
      
      LimpaTela
      NavBar()
           
      Para cont <- 6 ate 0 passo -1 faca

           EscrevaL(arrayNome[cont])

      FimPara

fimalgoritmo