Algoritmo "Exer-35"


Var
carro, dias: inteiro
km: real

Inicio

  escreval ("ALUGUEL DE CARROS")
  escreval ("Qual carro gostaria de usar?")
  escreval ("[1] Carro Popular - R$90 por dia")
  escreval ("[2] Carro Luxuoso - R$150 por dia")
  leia (carro)

  se (carro=1) ou (carro= 2) entao
    Escreva  ("Quantos dias pretende alugar o veículo?")
    leia (dias)
    escreva  ("Quantos Km irá percorrer? ")
    leia (km)

      escolha carro

         caso  1
           se (km<=100) entao
              escreva ("Você pagará: R$",(90*dias)+(km*0.2))
           senao
                se (km>100) entao
                   escreva ("Você pagará: R$",(90*dias)+(km*0.1))
                fimse
           fimse

         caso 2
           se (km<=200) entao
              escreva("Você pagará: R$",(150*dias)+(km*0.3))
           senao
                se (km>200) entao
                   escreva ("Você pagará: R$",(150*dias)+(km*0.25))
                fimse
           fimse
      fimescolha

  senao
       limpatela
       escreva ("Escolha de veículo inválida")
  fimse

Fimalgoritmo