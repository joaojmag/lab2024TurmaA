Algoritmo "14.3-GUANABARA"

//Aula #14.3 Guanabara "Só Nomes com C"

var
   nome : Caracter
   soC : vetor[1..10] de Caracter
   i, total: Inteiro

//Procedimentos

Procedimento NavBar()
Inicio
      LimpaTela
      EscrevaL (" __________________" )
      EscrevaL ("|                  |")
      EscrevaL ("|  Só Nomes com C  |")
      EscrevaL ("|__________________|")
      EscrevaL (" ")

FimProcedimento

Inicio
      NavBar()

      Para i <- 1 ate 10 faca

           Escreva ("Digite Seu Nome: ")
           Leia(nome)

           Se(Copia(Maiusc(nome),1, 1) = "C") entao
             total <- total + 1
             soC[total] <- nome
           FimSe
      FimPara
      
      LimpaTela
      EscrevaL(" Listagem Final" )
      EScrevaL(" ")
      Para i <- 1 ate total faca
           EscrevaL(soC[i])
      FimPara

fimalgoritmo