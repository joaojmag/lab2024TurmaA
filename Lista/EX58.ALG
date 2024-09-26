algoritmo "ex58"
var

   idade, cont, pessoas, quantidade: inteiro
   somaIdade, somaIdade2: real

inicio

     cont <- 0
     Escreva("QUANTAS PESSOAS TEM NA TURMA? ")
     Leia(quantidade)
     Escreval("--------------------------")
     Enquanto (idade <> 999) e (cont <> quantidade) faca
              Escreva("DIGITE A IDADE ==> ")
              Leia(idade)
              pessoas <- pessoas + 1
              somaIdade <- somaIdade + idade
              cont <- cont + 1
      se (idade = 999) entao
         Escreval("PROGRAMA ENCERRADO.")
      fimse

     FimEnquanto

     somaIdade2 <- (somaIdade/quantidade)

     Escreval("--------------------------")
     Escreval("EXISTEM,",pessoas, " PESSOAS NA TURMA NESSE GRUPO. ")
     Escreval("A MÉDIA DE IDADE DESSE GRUPO É ", somaIdade2 :3:2,". ")

fimalgoritmo