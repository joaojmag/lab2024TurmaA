Algoritmo "15.3-GUANABARA"

//Aula #15.3 Guanabara "Matriz Identidade de 3ª Ordem"

var
   matID : vetor[1..3, 1..3] de Inteiro
   linha, coluna : Inteiro

//Procedimentos

Procedimento NavBar()
Inicio
      LimpaTela
      EscrevaL (" ___________________" )
      EscrevaL ("|                   |")
      EscrevaL ("| Matriz Identidade |")
      EscrevaL ("|    De 3ª Ordem    |")
      EscrevaL ("|___________________|")
      EscrevaL (" ")

FimProcedimento

Inicio
      NavBar()

      Para linha <- 1 ate 3 faca
           Para coluna <- 1 ate 3 faca
                Se (coluna = linha) entao
                   matID[linha,coluna] <- 1
                Senao
                   matID[linha,coluna] <- 0
                FimSe
           FimPara
      FimPara
      
      Para linha <- 1 ate 3 faca
      
           Para coluna <- 1 ate 3 faca
                Escreva(matID[linha,coluna]:3)
           FimPara
           EscrevaL()
           
      FimPara

fimalgoritmo