algoritmo "GUANABARA_10.6"

Var
   idadeF, idadeM, homem, mulher, homemMais18, mulher25a30, cabelo: Inteiro
   sexo, continue : Caracter

inicio

      EscrevaL ("----------------------")
      EscrevaL ("ESCOLHENDO PESSOAS")
      EscrevaL ("----------------------")
      EscrevaL (" ")

      continue <- "S"

      Enquanto (continue = "s") ou (continue = "S") Faca

         EscrevaL(" ")
         EscrevaL("QUAL O SEU GÊNERO? ")
         Escreval("[M] PARA MASCULINO")
         Escreval("[F] PARA FEMININO")
         Leia(sexo)

         se (sexo <> "F") e (sexo <> "f") e (sexo <> "M") e (sexo <> "m") entao
             EscrevaL(" ")
             EscrevaL("SEXO INVALÍDO, PREENCHA NOVAMENTE!")
         fimSe

         se (sexo = "F") ou (sexo = "f") entao

             EscrevaL(" ")
             Escreva("QUAL A SUA IDADE? ")
             Leia(idadeM)

             EscrevaL(" ")
             Escreva("QUAL O SEU CABELO?")
             EscrevaL()

             EscrevaL ("--------------" )
             EscrevaL ("[1] PRETO    ")
             EscrevaL ("[2] CASTANHO ")
             EscrevaL ("[3] LOIRO    ")
             EscrevaL ("[4] RUIVO    ")
             EscrevaL ("---------------")
             EscrevaL (" ")
             Leia(cabelo)

             se (idadeF > 24) ou (idadeF < 31) e (cabelo = 3) entao
                mulher25a30 <- mulher25a30 + 1
             FimSe

             Escreva("DESEJA CONTINUAR? [S/N]: ")
             Leia (continue)

         Senao

              Se (sexo = "M") ou (sexo = "m") entao

                  EscrevaL(" ")
                  Escreva("QUAL A SUA IDADE? ")
                  Leia(idadeM)

                  EscrevaL(" ")
                  Escreva("QUAL O SEU CABELO?")
                  EscrevaL()

                  EscrevaL ("----------------")
                  EscrevaL ("| [1] PRETO    |")
                  EscrevaL ("| [2] CASTANHO |")
                  EscrevaL ("| [3] LOIRO    |")
                  EscrevaL ("| [4] RUIVO    |")
                  EscrevaL ("----------------")
                  EscrevaL (" ")
                  Leia(cabelo)

                   se (idadeM > 18) e (cabelo = 2) entao
                       homemMais18 <- homemMais18 + 1
                   fimSe

                  Escreva("DESEJA CONTINUAR? [S/N]: ")
                  Leia (continue)

         FimSe
         FimSe

      FimEnquanto

          EscrevaL("")
          EscrevaL (homemMais18, " É O TOTAL DE HOMENS QUE TEM MAIS DE 18 ANOS E CABELO CASTANHO! ")
          EscrevaL (mulher25a30, " É O TOATAL DE MULHERES QUE TEM ENTRE 25 E 30 ANOS E CABELO LOIRO! ")

fimalgoritmo