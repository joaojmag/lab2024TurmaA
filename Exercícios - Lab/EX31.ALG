Algoritmo "Ex31"


//31) [DESAFIO] Crie um jogo de JoKenPo (Pedra-Papel-Tesoura)

var

   player1, player2 : caracter
   jogada1, jogada2 : inteiro

inicio

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
           Se (player1 = "Pedra" =) e (player2 = "Tesoura") entao
           
              EscrevaL("Jogador Nº1 Ganhou! Pedra ganha de Tesoura.")
           Senao
                Se (player1 = "Pedra" =) e (player2 = "Papel") entao
                
                   EscrevaL("Jogador Nº2 Ganhou! Papel ganha de Pedra.")
                Senao
                     Se (player1 = "Papel" =) e (player2 = "Tesoura") entao

                        EscrevaL("Jogador Nº2 Ganhou! Tesoura ganha de Papel.")
                     Senao
                          Se (player1 = "Papel" =) e (player2 = "Pedra") entao

                             EscrevaL("Jogador Nº1 Ganhou! Papel ganha de Pedra.")
                          Senao
                               Se (player1 = "Tesoura" =) e (player2 = "Papel") entao

                                  EscrevaL("Jogador Nº1 Ganhou! Tesoura ganha de Papel.")
                               Senao
                                    Se (player1 = "Tesoura" =) e (player2 = "Pedra") entao

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
      
fimalgoritmo