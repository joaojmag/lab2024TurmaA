algoritmo "ex57"
var

   sexo, resp: caractere
   mulheres, homens: inteiro
   salarioF, salarioM, salarioFem, salarioMas: real

inicio

      Escreval("APLICATIVO DOS FUNCIONARIOS.")
      Escreval("------------------------------")
      Escreval("DIIGTE [F] PARA MULHER.")
      Escreval("DIGITE [M] PARA HOMEM.")
      Escreval("------------------------------")

      resp <- "S"
      Enquanto (resp = "S") faca
               Escreva("DIGITE SEU SEXO: ")
               Leia(sexo)

               se (sexo = "F") entao
                  Escreva("QUAL SEU SALÁRIO: R$")
                  Leia(salarioF)

                  mulheres <- mulheres + 1
                  salarioFem <- salarioF + salarioFem

                  Escreva("DESEJA CONTINUAR? [S/N]: ")
                  Leia(resp)
                  Escreval("")
               senao
                  se (sexo = "M") entao
                     Escreva("QUAL SEU SALÁRIO: R$")
                     Leia(salarioM)

                     homens <- homens + 1
                     salarioMas <- salarioM + salarioMas

                     Escreva("DESEJA CONTINUAR? [S/N]: ")
                     Leia(resp)
                     Escreval("")
                  fimse
               fimse
         FimEnquanto

         Escreval("------------------------------")
         Escreval(homens, " HOMENS TRABALHAM E SEUS SALÁRIOS SOMADOS É DE , R$", salarioMas)
         Escreval(mulheres, " MULHERES TRABALHAM E SEUS SALÁRIOS SOMADOS É DE, R$", salarioFem)

fimalgoritmo