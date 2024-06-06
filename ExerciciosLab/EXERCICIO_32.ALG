algoritmo "exercicio_32"
var

   N, sorteio, sortear: Inteiro

inicio

      Escreval("VAMOS JOGAR UM JOGO.")
      Escreval("EU VOU PENSAR NUM NÚMERO E VOCÊ TERÁ QUE ADVINHA-LO.")
      
      Para sortear de 1 ate 5 faca
      sorteio <- Randi(5)
      FimPara
      
      Escreva("QUAL NÚMERO VOCÊ ESTÁ PENSANDO: ")
      Leia(N)
      Escreval(" ")
      
      se (N = sorteio) entao
         Escreval("O NÚMERO QUE EU PENSEI FOI ", sorteio, " IGUAL VOCÊ.")
         Escreval("VOCÊ GANHOU.")
           senao
                Escreval("O NÚMERO QUE EU PENSEI FOI", sorteio, " DIFERENTE DE VOCÊ.")
                Escreval("VOCÊ PERDEU.")
           fimse


fimalgoritmo