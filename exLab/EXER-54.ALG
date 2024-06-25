Algoritmo "Exer-54"

Var
contador: inteiro
altura, soma, media: real
peso, pesoNoventa, menorCinquenta, maiorCem: inteiro
Inicio
   contador <- 1
   EscrevaL ("Vamos ver a ALTURA e PESO algumas pessoas:")

   Enquanto (contador <= 3) faca
      escreval ("Qual ", contador,"° altura (m): ")
      leia (altura)
      escreval (" Qual seu peso (Kg): ")
      leia (peso)
      
      se (peso >90) entao
         pesoNoventa <- pesoNoventa +1
      fimSe
      
      se (peso<50) e (altura<1.6) entao
         menorCinquenta <- menorCinquenta +1
      fimSe
      
      se (peso>=100) e (altura>1.9) entao
          maiorCem <- maiorCem +1
      fimSe
      contador <- contador +1
      soma <- soma + altura
   fimEnquanto
      media <- soma/3
      escreval ("A média de altura desse grupo foi: ",media:6:2)
      escreval (pesoNoventa, " pessoas pesam mais de 90Kg.")
      escreval (menorCinquenta, " pessoas pesam menos de 50Kg e tem menos de 1.60m")
      escreva  (maiorCem, " pessoas medem mais de 1.90m pesam mais de 100Kg.")
Fimalgoritmo