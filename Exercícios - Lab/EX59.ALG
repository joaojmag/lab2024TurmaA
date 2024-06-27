Algoritmo "Ex59"

//59) Crie um programa que leia o sexo e a idade de várias pessoas. O programa vai
//perguntar se o usuário quer continuar ou não a cada pessoa. No final, mostre:
//a) qual é a maior idade lida
//b) quantos homens foram cadastrados
//c) qual é a idade da mulher mais jovem
//d) qual é a média de idade entre os homens

Var
   idadeF, idadeM, maiorIdade, homem, mulherJovem : Inteiro
   mediaH : Real
   sexo, continue : Caracter

inicio

      EscrevaL (" _____________________________________" )
      EscrevaL ("|                                     |")
      EscrevaL ("| Idade e Sexo média de idade e afins |")
      EscrevaL ("|_____________________________________|")
      EscrevaL (" ")

      continue <- "S"

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

             Se ( idadeF > maiorIdade ) entao
                maiorIdade <- idadeF
                mulherJovem <- maiorIdade
                
                Se ( idadeF < mulherJovem ) entao
                   mulherJovem <- idadeF
                FimSe
             Senao
             
                Se ( idadeF < mulherJovem ) entao
                   mulherJovem <- idadeF
                FimSe
                
             FimSe
             
             
             Escreva("Deseja continuar? [S/N]: ")
             Leia (continue)

         Senao

              Se (sexo = "M") ou (sexo = "m") entao

                  EscrevaL(" ")
                  Escreva("Qual a sua idade? ")
                  Leia(idadeM)

                   Se ( idadeM > maiorIdade ) entao
                       maiorIdade <- idadeM
                       homem <- homem + 1
                       mediaH <- mediaH + idadeM
                       
                   Senao
                      homem <- homem + 1
                      mediaH <- mediaH + idadeM
                      
                   FimSe
                  
                  Escreva("Deseja continuar? [S/N]: ")
                  Leia (continue)

         FimSe
         FimSe
      
      FimEnquanto

          mediaH <- ( mediaH / homem )

          EscrevaL("")
          EscrevaL (maiorIdade, " É a maior idade lida. ")
          EscrevaL (homem, " Homens foram cadastrados! ")
          EscrevaL (mulherJovem, " É a idade da mulher mais jovem! ")
          EscrevaL (mediaH:3:0, " É a média de idade dos homens. ")

fimalgoritmo