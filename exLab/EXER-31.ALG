Algoritmo "Exer-31"

Var

 jogada1, jogada2: inteiro
 pedra, papel, tesoura: inteiro

Inicio

  Escreval ("JoKenPo")
  escreval ("Jogador1 escolha:")
  escreval ("[1] Pedra")
  escreval ("[2] Papel")
  escreval ("[3] Tesoura")
  leia (jogada1)

  se (jogada1<>1) e (jogada1<>2)e (jogada1<>3) entao
    escreva ("Jogada inválida")
  fimse


  limpatela

  escreval ("Jogador2 escolha:")
  escreval ("[1] Pedra")
  escreval ("[2] Papel")
  escreval ("[3] Tesoura")
  leia (jogada2)


  se (jogada2<>1) e (jogada2<>2)e (jogada2<>3) entao
    escreva ("Jogada inválida")
  fimse

  limpatela

  pedra <- 1
  papel <- 2
  tesoura <- 3

  escreval (" ")

  Se (jogada1=jogada2) entao
     escreva ("Vocês empataram")
     
  Senao

  // PRIMEIRO JOGADOR GANHANDO
  
       se (jogada1=papel) e (jogada2=pedra) entao
          escreva ("Jogador1 WINNER")

       senao
            se (jogada1=pedra) e (jogada2=tesoura) entao
               escreva ("Jogador1 WINNER")

            senao
                 se (jogada1=tesoura) e (jogada2=papel) entao
                    escreva ("Jogador1 WINNER")
                 senao
  // SEGUNDO JOGADOR GANHANDO
                    se(jogada2=papel) e (jogada1=pedra) entao
                      escreva ("Jogador2 WINNER")

                    senao
                      se (jogada2=pedra) e (jogada1=tesoura) entao
                         escreva ("Jogador2 WINNER")

                      senao
                         se (jogada2=tesoura) e (jogada1=papel) entao
                            escreva ("Jogador2 WINNER")
                         fimse
                      fimse
                    fimse
                 fimse
            fimse
       fimse
  fimse

       
  FimSe

Fimalgoritmo