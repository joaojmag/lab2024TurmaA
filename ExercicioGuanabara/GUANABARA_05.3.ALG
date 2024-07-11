algoritmo "guanabara_05.3"
var

    M, A, IMC: Real

inicio

      Escreva("Massa (Kg): ")
      Leia(M)
      Escreva("Altura (m): ")
      Leia(A)
      
      IMC <- M / (A ^ 2)
      
      Escreval("IMC: ", IMC:5:2)
      se (IMC >= 18.5) e (IMC < 25) entao
         Escreval("Parabens! Voce esta no peso ideal")
      senao
         Escreval("Voce nao esta no peso ideal")
      fimse

fimalgoritmo