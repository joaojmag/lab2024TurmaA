Algoritmo "Ex60"

//60) Desenvolva um algoritmo que leia o nome, a idade e o sexo de várias pessoas.
//O programa vai perguntar se o usuário quer ou não continuar. No final, mostre:
//a) O nome da pessoa mais velha
//b) O nome da mulher mais jovem
//c) A média de idade do grupo
//d) Quantos homens tem mais de 30 anos
//e) Quantas mulheres tem menos de 18 anos

Var
   idadeF, idadeM, maiorIdade, homem, mulher, homemMais30, mulherMenos18, mulherJovem : Inteiro
   mediaGrupo : Real
   sexo, nome, nomeMaisVelho, nomeMulherJovem, continue : Caracter

inicio

      EscrevaL (" _____________________________________" )
      EscrevaL ("|                                     |")
      EscrevaL ("| Idade e Sexo média de idade e afins |")
      EscrevaL ("|_____________________________________|")
      EscrevaL (" ")

      continue <- "S"
      mulherJovem <- 18

      Enquanto (continue = "s") ou (continue = "S") Faca

         EscrevaL(" ")
         EscrevaL("Qual o seu Gênero? ")
         Escreva("M para Masculino, F para Feminino: ")
         Leia(sexo)

         Se (sexo <> "F") e (sexo <> "f") e (sexo <> "M") e (sexo <> "m") entao
             EscrevaL(" ")
             EscrevaL("Sexo Inválido informado, Preencha seu sexo novamente!")
         FimSe

         Se (sexo = "F") ou (sexo = "f") entao

             EscrevaL(" ")
             Escreva("Qual a sua idade? ")
             Leia(idadeF)
             
             EscrevaL(" ")
             Escreva("Qual o seu nome? ")
             Leia(nome)
             
             mulher <- mulher + 1
             mediaGrupo <- mediaGrupo + idadeF
             
             Se ( idadeF > maiorIdade ) entao
                maiorIdade <- idadeF
                nomeMaisVelho <- nome

                Se ( idadeF < 18 ) e ( idadeF < mulherJovem ) entao
                   mulherMenos18 <- mulherMenos18 + 1
                   mulherJovem <- idadeF
                   nomeMulherJovem <- nome
                   
                FimSe
                
             Senao

                Se ( idadeF < 18 ) e ( idadeF < mulherJovem ) entao
                   mulherMenos18 <- mulherMenos18 + 1
                   mulherJovem <- idadeF
                   nomeMulherJovem <- nome
                FimSe

             FimSe

             Escreva("Deseja continuar? [S/N]: ")
             Leia (continue)

         Senao

              Se (sexo = "M") ou (sexo = "m") entao

                  EscrevaL(" ")
                  Escreva("Qual a sua idade? ")
                  Leia(idadeM)
                  
                  EscrevaL(" ")
                  Escreva("Qual o seu nome? ")
                  Leia(nome)

                  homem <- homem + 1
                  mediaGrupo <- mediaGrupo + idadeM

                   Se ( idadeM > maiorIdade ) entao
                       maiorIdade <- idadeM
                       nomeMaisVelho <- nome
                       
                       Se ( idadeM > 30 ) entao
                          homemMais30 <- homemMais30 + 1
                       FimSe

                   Senao
                   
                       Se ( idadeM > 30 ) entao
                            homemMais30 <- homemMais30 + 1
                         FimSe

                   FimSe

                  Escreva("Deseja continuar? [S/N]: ")
                  Leia (continue)

         FimSe
         FimSe

      FimEnquanto

          mediaGrupo <- ( mediaGrupo / (homem + mulher) )

          EscrevaL("")
          EscrevaL (nomeMaisVelho, " É a pessoa mais velha! ")
          EscrevaL (nomeMulherJovem, " É a mulher mais jovem! ")
          EscrevaL (mediaGrupo:4:1, " É a media de idade do Grupo. ")
          EscrevaL (homemMais30, " Homens têm mais de 30 anos! ")
          EscrevaL (mulherMenos18, " Mulheres têm menos de 18 anos! ")

fimalgoritmo