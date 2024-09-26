algoritmo "ex59"
var

   sexo, resp: caractere
   mulheres, homens: inteiro
   idadeF, idadeM, maiorFem, menorFem, maiorMas, menorMas: real
   idadeMaxima, idadeMaxima2, mediaM, mediaF: real

inicio

      Escreval("APLICATIVO DOS FUNCIONARIOS.")
      Escreval("------------------------------")
      Escreval("DIIGTE [F] PARA MULHER.")
      Escreval("DIGITE [M] PARA HOMEM.")
      Escreval("MÍNIMO 2 HOMENS E 2 MULHERES.")
      Escreval("------------------------------")

      menorMas <- 999
      menorFem <- 999

      resp <- "S"
      Enquanto (resp = "S") faca
               Escreva("DIGITE SEU SEXO: ")
               Leia(sexo)

               se (sexo = "F") entao
                  Escreva("QUAL SUA IDADE: ")
                  Leia(idadeF)

                  mulheres <- mulheres + 1
                  idadeMaxima2 <- idadeF + idadeMaxima2

                  se (idadeF > maiorFem) entao
                     maiorFem <- idadeF
                  fimse

                  se (idadeF < menorFem) entao
                     menorFem <- idadeF
                  fimse

                  Escreva("DESEJA CONTINUAR? [S/N]: ")
                  Leia(resp)
                  Escreval("")

               senao
                  se (sexo = "M") entao
                     Escreva("QUAL SUA IDADE: ")
                     Leia(idadeM)

                     homens <- homens + 1
                     idadeMaxima <- idadeM + idadeMaxima

                     se (idadeM > maiorMas) entao
                        maiorMas <- idadeM
                     fimse

                     se (idadeM < menorMas) entao
                        menorMas <- idadeM
                     fimse

                     Escreva("DESEJA CONTINUAR? [S/N]: ")
                     Leia(resp)
                     Escreval("")
                  fimse
               fimse
         FimEnquanto

         mediaM <- idadeMaxima/homens
         mediaF <- idadeMaxima2/mulheres

         Escreval("------------------------------")
         Escreval(homens, " HOMENS FORAM CADASTRADAS.")
         Escreval(mulheres, " MULHERES FORAM CADASTRADAS.")
         Escreval("------------------------------")
         Escreval(maiorMas, " FOI A MAIOR IDADE MASCULINA.")
         EScreval(maiorFem, " FOI A MAIOR IDADE FEMININA.")
         Escreval(menorMas, " FOI A MENOR IDADE MASCULINA.")
         Escreval(menorFem, " FOI A MENOR IDADE FEMININA.")
         Escreval("------------------------------")
         Escreval(mediaM:5:2, " É A MÉDIA DE IDADE ENTRE OS HOMENS.")
         Escreval(mediaF:5:2, " É A MÉDIA DE IDADE ENTRE AS MULHERES.")

 Fimalgoritmo