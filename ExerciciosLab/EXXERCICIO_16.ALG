algoritmo "exxercicio_16"
var
   tempoPerdido, anosPerdidos: inteiro
   cigarros, dias, anos: Inteiro
inicio
      Escreva("Quantos cigarros você fuma por dia?: ")
      Leia(cigarros)
      Escreva("Por quantos anos você fuma?: ")
      Leia(anos)
      tempoPerdido <- cigarros*10
      anosPerdidos <- tempoPerdido*365
      Escreval("A cada cigarro que você fuma, você perde 10 min da sua vida!")
      Escreval("Você já perdeu, ",  anosPerdidos, " minutos de vida, equivalente á", anosPerdidos/24:5:0, " dias")
      Escreva("Não fume, isso acaba com você!")
fimalgoritmo