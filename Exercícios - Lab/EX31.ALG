Algoritmo "Ex31"


//31) [DESAFIO] Crie um jogo de JoKenPo (Pedra-Papel-Tesoura)

var

   player1, player2, playAgain : caracter
   jogada1, jogada2, modoJogo : inteiro

inicio

      playAgain <- "S"
      Enquanto (playAgain = "S") faca
      
      limpatela

      EscrevaL (" __________________________________" )
      EscrevaL ("|                                  |")
      EscrevaL ("| JoKenPo! Pedra, Papel, Tesoura!! |")
      EscrevaL ("|__________________________________|")
      EscrevaL (" ")
      
      EscrevaL (" __________________________________" )
      EscrevaL ("|                                  |")
      EscrevaL ("|   Qual Modo Gostaria de Jogar?   |")
      EscrevaL ("|                                  |")
      EscrevaL ("| [1] Você VS Computador           |")
      EscrevaL ("| [2] Você VS Seu amigo            |")
      EscrevaL ("|__________________________________|")
      EscrevaL (" ")
      Leia(modoJogo)

      Escolha modoJogo

              Caso 1
      limpatela
      EscrevaL (" __________________________________" )
      EscrevaL ("|                                  |")
      EscrevaL ("| JoKenPo! Pedra, Papel, Tesoura!! |")
      EscrevaL ("|__________________________________|")
      EscrevaL (" ")

      EscrevaL (" __________________________________" )
      EscrevaL ("|                                  |")
      EscrevaL ("| O computador fez sua escolha,    |")
      EscrevaL ("| Sua Vez Jogador!                 |")
      EscrevaL ("| [1] Pedra                        |")
      EscrevaL ("| [2] Papel                        |")
      EscrevaL ("| [3] Tesoura                      |")
      EscrevaL ("|__________________________________|")
      EscrevaL (" ")
      Leia(jogada1)

      Escolha jogada1

              Caso 1
                   player1 <- ( "Pedra" )
              Caso 2
                   player1 <- ( "Papel" )
              Caso 3
                   player1 <- ( "Tesoura" )

              OutroCaso
                   EscrevaL("Jogada inválida! Tecle uma das opções acima.")
      FimEscolha

      limpatela

      EscrevaL (" __________________________________" )
      EscrevaL ("|                                  |")
      EscrevaL ("| JoKenPo! Pedra, Papel, Tesoura!! |")
      EscrevaL ("|__________________________________|")
      EscrevaL (" ")

      jogada2 <- ( randi(3) + 1 )

      Escolha jogada2

              Caso 1
                   player2 <- ( "Pedra" )
              Caso 2
                   player2 <- ( "Papel" )
              Caso 3
                   player2 <- ( "Tesoura" )

              OutroCaso
                   EscrevaL("Jogada inválida! Tecle uma das opções acima.")

      FimEscolha

      limpatela

      Se (player1 = "Pedra") e (player2 = "Pedra") ou (player1 = "Papel") e (player2 = "Papel") ou (player1 = "Tesoura") e (player2 = "Tesoura") entao

         EscrevaL("Empate! Você jogou: ", player1, ". Computador jogou: ", player2, ".")
      Senao
           Se (player1 = "Pedra") e (player2 = "Tesoura") entao

              EscrevaL("Você Ganhou! Pedra ganha de Tesoura.")
           Senao
                Se (player1 = "Pedra") e (player2 = "Papel") entao

                   EscrevaL("Computador Ganhou! Papel ganha de Pedra.")
                Senao
                     Se (player1 = "Papel") e (player2 = "Tesoura") entao

                        EscrevaL("Computador Ganhou! Tesoura ganha de Papel.")
                     Senao
                          Se (player1 = "Papel") e (player2 = "Pedra") entao

                             EscrevaL("Você Ganhou! Papel ganha de Pedra.")
                          Senao
                               Se (player1 = "Tesoura") e (player2 = "Papel") entao

                                  EscrevaL("Você Ganhou! Tesoura ganha de Papel.")
                               Senao
                                    Se (player1 = "Tesoura") e (player2 = "Pedra") entao

                                       EscrevaL("Computador Ganhou! Pedra ganha de Tesoura.")
                                    Senao
                                       EscrevaL("Você não escolheu entre 1 e 3, jogue novamente!")
                                    FimSe
                               FimSe
                          FimSe
                     FimSe
                FimSe
           FimSe
      FimSe

      EscrevaL(" Deseja Jogar Novamente [S/N]? ")
      Leia(playAgain)
      EscrevaL(" Obrigado por Jogar!")

              Caso 2

      limpatela
      EscrevaL (" __________________________________" )
      EscrevaL ("|                                  |")
      EscrevaL ("| JoKenPo! Pedra, Papel, Tesoura!! |")
      EscrevaL ("|__________________________________|")
      EscrevaL (" ")
      
      EscrevaL (" __________________________________" )
      EscrevaL ("|                                  |")
      EscrevaL ("| Vez do Jogador N°1:              |")
      EscrevaL ("| [1] Pedra                        |")
      EscrevaL ("| [2] Papel                        |")
      EscrevaL ("| [3] Tesoura                      |")
      EscrevaL ("|__________________________________|")
      EscrevaL (" ")
      Leia(jogada1)
      
      Escolha jogada1

              Caso 1
                   player1 <- ( "Pedra" )
              Caso 2
                   player1 <- ( "Papel" )
              Caso 3
                   player1 <- ( "Tesoura" )

              OutroCaso
                   EscrevaL("Jogada inválida! Tecle uma das opções acima.")
      FimEscolha
      
      limpatela

      EscrevaL (" __________________________________" )
      EscrevaL ("|                                  |")
      EscrevaL ("| JoKenPo! Pedra, Papel, Tesoura!! |")
      EscrevaL ("|__________________________________|")
      EscrevaL (" ")
      
      EscrevaL (" __________________________________" )
      EscrevaL ("|                                  |")
      EscrevaL ("| Vez do Jogador N°2:              |")
      EscrevaL ("| [1] Pedra                        |")
      EscrevaL ("| [2] Papel                        |")
      EscrevaL ("| [3] Tesoura                      |")
      EscrevaL ("|__________________________________|")
      EscrevaL (" ")
      Leia(jogada2)

      Escolha jogada2

              Caso 1
                   player2 <- ( "Pedra" )
              Caso 2
                   player2 <- ( "Papel" )
              Caso 3
                   player2 <- ( "Tesoura" )

              OutroCaso
                   EscrevaL("Jogada inválida! Tecle uma das opções acima.")

      FimEscolha
      
      limpatela
      
      Se (player1 = "Pedra") e (player2 = "Pedra") ou (player1 = "Papel") e (player2 = "Papel") ou (player1 = "Tesoura") e (player2 = "Tesoura") entao
      
         EscrevaL("Empate! Jogador Nº1 jogou: ", player1, ". Jogador Nº2 jogou: ", player2, ".")
      Senao
           Se (player1 = "Pedra") e (player2 = "Tesoura") entao
           
              EscrevaL("Jogador Nº1 Ganhou! Pedra ganha de Tesoura.")
           Senao
                Se (player1 = "Pedra") e (player2 = "Papel") entao
                
                   EscrevaL("Jogador Nº2 Ganhou! Papel ganha de Pedra.")
                Senao
                     Se (player1 = "Papel") e (player2 = "Tesoura") entao

                        EscrevaL("Jogador Nº2 Ganhou! Tesoura ganha de Papel.")
                     Senao
                          Se (player1 = "Papel") e (player2 = "Pedra") entao

                             EscrevaL("Jogador Nº1 Ganhou! Papel ganha de Pedra.")
                          Senao
                               Se (player1 = "Tesoura") e (player2 = "Papel") entao

                                  EscrevaL("Jogador Nº1 Ganhou! Tesoura ganha de Papel.")
                               Senao
                                    Se (player1 = "Tesoura") e (player2 = "Pedra") entao

                                       EscrevaL("Jogador Nº2 Ganhou! Pedra ganha de Tesoura.")
                                    Senao
                                       EscrevaL("Algum jogador não escolheu entre 1 e 3, jogue novamente!")
                                    FimSe
                               FimSe
                          FimSe
                     FimSe
                FimSe
           FimSe
      FimSe
      
      EscrevaL(" Deseja Jogar Novamente [S/N]? ")
      Leia(playAgain)
      EscrevaL(" Obrigado por Jogar!")
      
      FimEscolha
      
      FimEnquanto
      
fimalgoritmo