algoritmo "exercicio_62"
var

   resp: caractere
   idade, idades, idadeMais21: inteiro
   media, mediaFinal: real

inicio

      resp <- "S"
      Enquanto (resp = "S") faca
               Escreva("QUAL A SUA IDADE? ")
               Leia(idade)
               
               Escreva("DESEJA CONTINUAR? [S/N]: ")
               Leia(resp)
               EscrevaL("")
               
               idades <- idades + 1
               
               media <- media + idade
               
               se (idade >= 21) entao
                  idadeMais21 <- idadeMais21 + 1
               fimse
               
      fimenquanto

      mediaFinal <- media/idades

      Escreval("")
      Escreval("-------------------------------------")
      Escreval(idades, " IDADES FORAM DIGITADAS.")
      Escreval(mediaFinal:5:2, " É A MEDIA ENTRE AS IDADES.")
      Escreval(idadeMais21, " PESSOAS TEM 21 ANOS OU MAIS.")

fimalgoritmo