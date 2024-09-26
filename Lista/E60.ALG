algoritmo "e60"
var

   resp, nome, nomeMaisVelho, nomeMaisVelho2, sexo: caractere
   homens, idadeMas, maiorMas, homensMais30: inteiro
   mulheres, idadeFem, maiorFem, mulheresMenos18: inteiro
   mediaMasculina, mediaFeminina, mediaMas, mediaFem, mediaGrupo: real


inicio

      resp <- "S"
      Enquanto (resp = "S") faca
               Escreva("QUAL SEU NOME? ")
               Leia(nome)
               Escreval("QUAL SEU SEXO: ")
               Escreval("DIGITE [F] PARA FEMININO.")
               Escreval("DIGITE [M] PARA MASCULINO.")
               Escreva(":")
               Leia(sexo)

               se (sexo = "M") entao
                  Escreva("QUAL A SUA IDADE: ")
                  Leia(idadeMas)

                  homens <- homens + 1

                  se (idadeMas > maiorMas) entao
                     maiorMas <- idadeMas
                     nomeMaisVelho <- nome
                  fimse

                  se (idadeMas > 30) entao
                     homensMais30 <- homensMais30 + 1
                  fimse

                  mediaMasculina <- mediaMasculina + idadeMas

                  Escreva("VOCÈ QUER CONTINUAR? [S/N] ")
                  Leia(resp)
                  Escreval("")
               fimse

              se (sexo = "F") entao
                 Escreva("QUAL A SUA IDADE? ")
                 Leia(idadeFem)

                 mulheres <- mulheres + 1

                 se (idadeFem > maiorFem) entao
                    maiorFem <- idadeFem
                    nomeMaisVelho2 <- nome
                 fimse

                 se (idadeFem < 18) entao
                    mulheresMenos18 <- mulheresMenos18 + 1
                 fimse

                 mediaFeminina <- mediaFeminina + idadeFem

                 Escreva("VOCÊ QUER CONTINUAR? [S/N] ")
                 Leia(resp)
                 Escreval("")
              fimse
       fimenquanto

       mediaMas <- mediaMasculina/homens
       mediaFem <- mediaFeminina/mulheres
       mediaGrupo <- (mediaMasculina+mediaFeminina)/(homens+mulheres)

       Escreval("--------------------------------------")
       se ( maiorMas > maiorFem) entao
          Escreval(nomeMaisVelho, " É A PESSOA MAIS VELHA DO GRUPO.")
       senao
            Escreval(nomeMaisVelho2, " É A PESSOA MAIS VELHA DO GRUPO.")
       fimse

       Escreval(mediaGrupo, " É A MÉDIA DE IDADE ENTRE OS GÊNEROS.")
       Escreval(homensMais30, " HOMENS TEM MAIS DE 30 ANOS.")
       Escreval(mulheresMenos18, " MULHERES TEM MENOS DE 18 ANOS.")

fimalgoritmo