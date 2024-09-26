algoritmo "ex56"
var

   N, S, cont: inteiro

inicio

     S <- 0
     cont <- 1
     Enquanto (N <> 1111) faca
              Escreva("DIGITE O VALOR ==> ")
              Leia(N)
              S <- S + N
              cont <- cont + 1
      se (N = 1111) entao
         Escreval("PROGRAMA ENCERRADO.")
      fimse

     FimEnquanto

     Escreval("A SOMA DOS VALORES DIGITADOS É ", S)

fimalgoritmo