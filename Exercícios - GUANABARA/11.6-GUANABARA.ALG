Algoritmo "11.6-GUANABARA"

//Aula #11.6 Guanabara PLUS "Analisador de Valores"

Var
   c, num, soma, divisi5, nulo, somaPar  : inteiro
   media : Real

//Procedimentos

Procedimento NavBar()
Inicio
      LimpaTela
      EscrevaL (" _________________________" )
      EscrevaL ("|                         |")
      EscrevaL ("|  Analisador de Valores  |")
      EscrevaL ("|_________________________|")
      EscrevaL (" ")

FimProcedimento

Inicio
      NavBar()

      Para c <- 1 ate 5 faca

           Escreva("Digite o",c, "º Valor: ")
           Leia(num)
           
           soma <- soma + num
           media <- media + num
           
           Se ( num % 5 = 0) Entao
              divisi5 <- divisi5 + 1
           FimSe

           Se ( num = 0) Entao
              nulo <- nulo + 1
           FimSe
           
           Se ( num % 2 = 0) Entao
              somaPar <- somaPar + num
           FimSe

      FimPara
      
      media <- ( media/5 )
      
      EscrevaL("A Soma dos Valores digitados é: ", soma)
      EscrevaL("A Média dos Valores digitados é: ", media)
      EscrevaL("Dos Valores Digitados São Divisíveis por 5: ", divisi5)
      EscrevaL("Dos Valores Digitados São Nulos: ", nulo)
      EscrevaL("A Soma dos Valores Pares digitados é: ", somaPar)

fimalgoritmo