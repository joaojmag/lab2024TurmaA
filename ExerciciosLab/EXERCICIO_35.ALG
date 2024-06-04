algoritmo "exercicio_35"
var

   carro, dias: inteiro
   km, valor, kmfinal: real

inicio

      Escreval("BEM VINDO AO ALUGUEL DE CARROS AUTOCAR.")
      Escreval("ESCOLHA O MELHOR MODELO PARA VOCÊ.")
      Escreval("[1] CARRO POPULAR")
      Escreval("[2] CARRO DE LUXO")
      Leia(carro)
      Escreval("QUANTOS KM VOCÊ PRETENDE DIRIGIR: ")
      Leia(km)
      Escreval("POR QUANTOS DIAS: ")
      Leia(dias)
      Escreval("----------------------------")
      
      Escolha carro
      
      Caso 1
           valor <- 90
           kmfinal <- km*0.20
        se (km <= 100) entao
          Escreval("O VALOR DA VIAGEM FOI DE R$", kmfinal+valor*dias)
          Escreval("---------------------------")
          Escreval("MUITO OBRIGADO POR VIAJAR COM A GENTE!")
          Escreval("VOLTE SEMPRE!")
          Escreva("----------------------------")
        senao
           kmfinal <- km*0.10
        se (km <= 101) entao
          Escreval("O VALOR DA VIAGEM FOI DE R$", kmfinal+valor*dias)
          Escreval("---------------------------")
          Escreval("MUITO OBRIGADO POR VIAJAR COM A GENTE!")
          Escreval("VOLTE SEMPRE!")
          Escreva("----------------------------")
      fimse
   fimse
      
      Caso 2
           valor <- 150
           kmfinal <- km*0.30
        se (km <= 200) entao
          Escreval("O VALOR DA VIAGEM FOI DE R$", kmfinal+valor*dias)
          Escreval("---------------------------")
          Escreval("MUITO OBRIGADO POR VIAJAR COM A GENTE!")
          Escreval("VOLTE SEMPRE!")
          Escreva("----------------------------")
        senao
           kmfinal <- km*0.25
        se (km < 201) entao
          Escreval("O VALOR DA VIAGEM FOI DE R$", kmfinal+valor*dias)
          Escreval("---------------------------")
          Escreval("MUITO OBRIGADO POR VIAJAR COM A GENTE!")
          Escreval("VOLTE SEMPRE!")
          Escreva("----------------------------")
      fimse
   fimse
   
        outrocaso
        Escreval("ERRO.")
        Escreva("TENTE NOVAMENTE.")
        
      fimEscolha
      
fimalgoritmo