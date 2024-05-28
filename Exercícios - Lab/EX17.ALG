Algoritmo "Ex17"

//17) Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse
//80Km/h, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba
//o valor da multa, cobrando R$5 por cada Km acima da velocidade permitida.

Var

   velocidade, valorMulta : Real

Inicio

      Escreva("A que velocidade o veículo passou pelo radar (Km/h)? ")
      Leia(velocidade)

      Se (velocidade < 80) entao
         EscrevaL("Parabéns, está numa velocidade aceitável!")
      Senao
         valorMulta <- ( ( velocidade - 80) * 5 )
         EscrevaL("Velocidade acima da permitida! Você será multado em R$:", valorMulta)
      FimSe

Fimalgoritmo
                                                                                    ,