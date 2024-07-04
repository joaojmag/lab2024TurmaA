Algoritmo "Ex83"

//83) [DESAFIO] Crie uma lógica que preencha um vetor de 20 posições com números
//aleatórios (entre 0 e 99) gerados pelo computador. Logo em seguida, mostre os
//números gerados e depois coloque o vetor em ordem crescente, mostrando no final
//os valores ordenados.

Var
   vet : vetor[0..19] de Inteiro
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
      
      Para i <- 0 ate 19 faca

         Aleatorio 0 , 99
         Leia(vet[i])

      FimPara
      LimpaTela
      
      NavBar()
      EscrevaL("Números Aleatórios: ")
      
      Para i <- 0 ate 19 faca
      
         Escreva("{", vet[i], " }")

      FimPara
      
      EscrevaL("")


      Para i <- 0 ate 19 faca

           Para c <- i ate 19 faca
                Se(vet[i] > vet[c] ) entao
                   aux <- vet[i]
                   vet[i] <- vet[c]
                   vet[c] <- aux
                FimSe
           FimPara

      FimPara
      
      EscrevaL("")
      EscrevaL("Números Ordenados: ")
      
      Para i <- 0 ate 19 faca
           Escreva("{", vet[i], " }")
      FimPara
      
      EscrevaL("")


fimalgoritmo