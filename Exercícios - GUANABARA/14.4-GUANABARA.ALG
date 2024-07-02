Algoritmo "14.4-GUANABARA"

//Aula #14.4 Guanabara "Ordenação do Vetor"

var
   vet : vetor[1..4] de Inteiro
   i, c, aux: Inteiro

//Procedimentos

Procedimento NavBar()
Inicio
      LimpaTela
      EscrevaL (" ____________________" )
      EscrevaL ("|                    |")
      EscrevaL ("| Ordenação do Vetor |")
      EscrevaL ("|____________________|")
      EscrevaL (" ")

FimProcedimento

Inicio
      NavBar()

      Para i <- 1 ate 4 faca
           Escreva ("Digite um Valor: ")
           Leia(vet[i])
      FimPara

      Para i <- 1 ate 3 faca
      
           Para c <- i +1 ate 4 faca
                Se(vet[i] > vet[c] ) entao
                   aux <- vet[i]
                   vet[i] <- vet[c]
                   vet[c] <- aux
                FimSe
           FimPara
           
      FimPara

      Para i <- 1 ate 4 faca
           Escreva("{", vet[i], "}")
      FimPara
      
fimalgoritmo