Algoritmo "Ex35"

//35) Uma empresa de aluguel de carros precisa cobrar pelos seus serviços. O
//aluguel de um carro custa R$90 por dia para carro popular e R$150 por dia para
//carro de luxo. Além disso, o cliente paga por Km percorrido. Faça um programa
//que leia o tipo de carro alugado (popular ou luxo), quantos dias de aluguel e
//quantos Km foram percorridos. No final mostre o preço a ser pago de acordo com a
//tabela a seguir:
//- Carros populares (aluguel de R$90 por dia)
//- Até 100Km percorridos: R$0,20 por Km
//- Acima de 100Km percorridos: R$0,10 por Km
//- Carros de luxo (aluguel de R$150 por dia)
//- Até 200Km percorridos: R$0,30 por Km
//- Acima de 200Km percorridos: R$0,25 por Km

Var

   carroEscolhido, diasViagem: Inteiro
   distancia, custoViagem: Real

inicio

      EscrevaL (" __________________________________" )
      EscrevaL ("|                                  |")
      EscrevaL ("|  Aluguel de Carros do Cleytin.   |")
      EscrevaL ("|__________________________________|")
      EscrevaL (" ")

      EscrevaL (" __________________________________" )
      EscrevaL ("|                                  |")
      EscrevaL ("| Escolha o carro Desejado:        |")
      EscrevaL ("| [1] Carro Popular R$90,00  p/dia |")
      EscrevaL ("| [2] Carro Luxo    R$150,00 p/dia |")
      EscrevaL ("|__________________________________|")
      EscrevaL (" ")
      Leia(carroEscolhido)
      
      EscrevaL("")

      Escreva(" Pretende alugar o veículo por quantos dias? ")
      Leia(diasViagem)
      EscrevaL("")

      Escreva(" Qual será a distância de sua viagem? (Km): ")
      Leia(distancia)
      EscrevaL("")
      
      Escolha carroEscolhido

              Caso 1
                  Se(distancia <= 100) entao
                     custoViagem <- ( ( distancia *0.20 ) + ( diasViagem * 90) )
                     EscrevaL(" O preço desta viagem será de: R$", custoViagem,".")
                  Senao
                       custoViagem <- ( ( distancia *0.10 ) + ( diasViagem * 90) )
                       EscrevaL(" O preço desta viagem será de: R$", custoViagem:6:2,".")
                  FimSe
              Caso 2
                   Se(distancia <= 100) entao
                       custoViagem <- ( ( distancia *0.30 ) + ( diasViagem * 150) )
                       EscrevaL(" O preço desta viagem será de: R$", custoViagem,".")
                   Senao
                       custoViagem <- ( ( distancia *0.25 ) + ( diasViagem * 150) )
                       EscrevaL(" O preço desta viagem será de: R$", custoViagem:6:2,".")
                   FimSe

              OutroCaso
              
                   limpatela
                   EscrevaL(" Escolha de veículo inválida! Reinicie o programa e tudo digite novamente!")
                   fimAlgoritmo
      FimEscolha

fimalgoritmo
