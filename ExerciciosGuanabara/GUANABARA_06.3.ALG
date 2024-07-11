Algoritmo "GUANABARA_06.3"


var

   doacao: inteiro
   valor: real

inicio

      EscrevaL ("Criança Esperança.")
      EscrevaL ("----------------------------")
      EscrevaL (" ")
      EscrevaL (" [1] Para Doar R$10,00 ")
      EscrevaL (" [2] Para Doar R$25,00 ")
      EscrevaL (" [3] Para Doar R$50,00 ")
      EscrevaL (" [4] Para Doar Outro valor ")
      EscrevaL (" [5] Para Cancelar a Doação ")
      Leia(doacao)

      Escolha doacao
              Caso 1
                   Valor <- 10.00
              Caso 2
                   Valor <- 25.00
              Caso 3
                   Valor <- 50.00
              Caso 4
                   EscrevaL(" Qual valor deseja doar? R$:")
                   Leia (Valor)
              Caso 5
                   Valor <- 0
      FimEscolha

      Se (Valor = 0 ) entao

         EscrevaL("Doação Cancelada! Volte quando quiser doar.")
      Senao
      Se ( Valor < 0 ) entao

         EscrevaL("Valor Inválido! Por Favor, doe no mínimo R$0,01.")
      Senao
      Se ( Valor >= 0.01 ) entao

        EscrevaL ("------------------------------")
        EscrevaL (" Sua Doação foi de: R$", valor:6:2)
        EscrevaL (" Obrigado por doar!! Tenha um bom dia! ")
        EscrevaL ("------------------------------")
      FimSe
      FimSe
      FimSe

fimalgoritmo