algoritmo "exercicio_16"
var

   minutosPerdidos, tempoFinal, dias, diasInt, horas: Real
   tempoDiarioFumado, diasPerdidos: inteiro
   cigarros, anos: Inteiro
   
inicio

      Escreva("Quantos cigarros você fuma por dia?: ")
      Leia(cigarros)
      Escreva("Por quantos anos você fuma?: ")
      Leia(anos)

      tempoDiarioFumado <- cigarros*10
      diasPerdidos <- tempoDiarioFumado*365
      minutosPerdidos <- diasPerdidos*anos
      tempoFinal <- minutosPerdidos/1440  // 1440 igual a 1 dia em minutos
      diasInt <- tempoFinal-int(tempoFinal)
      horas <- diasInt*24
      
      Escreval("Você já perdeu, ",int(tempoFinal), " dias de vida e", int(horas), " e horas")
      Escreva("Não fume, isso acaba com você!")
      
fimalgoritmo