algoritmo "guanabara_06.2"
var

   M, A, IMC: Real

inicio

      Escreva("Massa (Kg): ")
      Leia(M)
      Escreva("Altura (m): ")
      Leia(A)
      
      IMC <- M / (A ^ 2)
      
      Escreval("IMC: ", IMC:5:2)
      se (IMC < 17) entao
         Escreval("Muito abaixo do Peso")
      senao
           se (IMC >= 17) e (IMC < 18.5) entao
              Escreval("Abaixo do Peso")
           senao
                se (IMC >= 18.5) e (IMC < 25) entao
                   Escreval("Parabens! Voce esta no seu peso ideal")
                senao
                     Escreva("Você nao esta na faixa de peso ideal")
                fimse
           fimse
      fimse
                   
                
                

fimalgoritmo