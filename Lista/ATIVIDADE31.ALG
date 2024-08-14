Algoritmo "ATIVIDADE31"



Var

   j1, j2:caractere
inicio
   Escreva("Jogador1")

   Leia(j1)

   Escreva("Jogador2")

   Leia(j2)

   Se(j1 = "pedra")e(j2 = "papel")entao

      Escreva("Jogador2 ganhou essa partida")

   Fimse

   Se(j1 = "papel")e(j2 = "pedra")entao

      Escreva("Jogador1 ganhou essa partida")

   Fimse

   Se(j1 = "tesoura")e (j2 = "papel")entao

      Escreva("Jogador2  ganhou essa partida")

   Fimse

   Se(j1 = "papel")e (j2 = "tesoura")entao

      Escreva("Jogador2  ganhou essa partida")

   Fimse


   Se(j1 = "pedra")e(j2 = "tesoura")entao

      Escreva("Jogador1 ganhou essa partida")

   Fimse

   Se(j1 = "tesoura")e(j2 = "pedra")entao

      Escreva("Jogador2 ganhou essa partida")

   Fimse

   Se(j1 = "pedra")e(j2 = "pedra")entao

      Escreva("Essa partida deu empate")

   Fimse

   Se(j1 = "tesoura")e(j2 = "tesoura")entao

      Escreva("Essa partida deu empate")

   Fimse

   Se(j1 = "papel")e(j2 = "papel")entao

      Escreva("Essa partida deu empate")

   Fimse

Fimalgoritmo