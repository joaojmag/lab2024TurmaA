Algoritmo "10.6-GUANABARA"

//Aula #10.5 Guanabara PLUS "EscolhendoPessoas"

Var
   idadeF, idadeM, homem, mulher, homemMais18, mulher25a30, cabelo: Inteiro
   sexo, continue : Caracter

inicio

      EscrevaL (" ____________________" )
      EscrevaL ("|                    |")
      EscrevaL ("| Escolhendo Pessoas |")
      EscrevaL ("|____________________|")
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
             Leia(idadeM)

             EscrevaL(" ")
             Escreva("Qual o seu Cabelo?")
             EscrevaL()
             
             EscrevaL (" ______________" )
             EscrevaL ("|              |")
             EscrevaL ("| [1] Preto    |")
             EscrevaL ("| [2] Castanho |")
             EscrevaL ("| [3] Loiro    |")
             EscrevaL ("| [4] Ruivo    |")
             EscrevaL ("|______________|")
             EscrevaL (" ")
             Leia(cabelo)

             Se ( idadeF > 24 ) ou ( idadeF < 31 ) e ( cabelo = 3 ) entao
                mulher25a30 <- mulher25a30 + 1
             FimSe

             Escreva("Deseja continuar? [S/N]: ")
             Leia (continue)

         Senao

              Se (sexo = "M") ou (sexo = "m") entao

                  EscrevaL(" ")
                  Escreva("Qual a sua idade? ")
                  Leia(idadeM)

                  EscrevaL(" ")
                  Escreva("Qual o seu Cabelo?")
                  EscrevaL()

                  EscrevaL (" ______________" )
                  EscrevaL ("|              |")
                  EscrevaL ("| [1] Preto    |")
                  EscrevaL ("| [2] Castanho |")
                  EscrevaL ("| [3] Loiro    |")
                  EscrevaL ("| [4] Ruivo    |")
                  EscrevaL ("|______________|")
                  EscrevaL (" ")
                  Leia(cabelo)

                   Se ( idadeM > 18 ) e ( cabelo = 2 ) entao
                       homemMais18 <- homemMais18 + 1
                   FimSe

                  Escreva("Deseja continuar? [S/N]: ")
                  Leia (continue)

         FimSe
         FimSe

      FimEnquanto
      
          EscrevaL("")
          EscrevaL (homemMais18, " É o total de Homens que têm mais de 18 anos e cabelo castanho! ")
          EscrevaL (mulher25a30, " É o total de Mulheres que têm entre 25 e 30 anos e cabelo loiro! ")

fimalgoritmo