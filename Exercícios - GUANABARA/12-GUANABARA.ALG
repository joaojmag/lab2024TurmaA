Algoritmo "12-GUANABARA"

//Aula #12 Guanabara "Detector de Pesado"

var
   i: Inteiro
   nome, pessoaPesada: Caracter
   peso, maisPesada: Real
   
Procedimento NavBar()
Inicio
      LimpaTela
      EscrevaL (" ____________________________" )
      EscrevaL ("|                            |")
      EscrevaL ("| Guanabara Detector de Peso |")
      EscrevaL ("|____________________________|")
      EscrevaL (" ")

FimProcedimento

Inicio
      NavBar()

      Para i <- 1 ate 5 faca
      
           Escreva("Digite o nome da pessoa: " )
           Leia(nome)
           Escreva("Digite o peso de ", nome, ": ")
           Leia(peso)
           
           Se ( peso > maisPesada ) entao
              maisPesada <- peso
              pessoaPesada <- nome
           FimSe
           
           NavBar()
           
      FimPara

       NavBar()
      EscrevaL (" A Pessoa mais pesada é ", pessoaPesada, " com", maisPesada, "Kg. ")
      
fimalgoritmo