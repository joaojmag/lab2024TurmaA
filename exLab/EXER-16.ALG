Algoritmo "Exer-16"

Var

  dias,anos:inteiro
  horas:real
  diasPerdidos: real
  diasInteiros: inteiro
  diasDecimais: real
  horasPerdidas:real

Inicio

    Escreval ("Vamos descobrir quanto tempo de vida você perdeu por fumar:")
    Escreva ("Quantos cigarros você fuma por dia: ")
    Leia (dias)
    Escreva ("Por quantos anos: ")
    Leia (anos)
    horas <- ((dias*10*365)/60) //convertendo de minutos para horas direto
    //quantidade de cigarros por dia X 10min de vida(por cigarro) X um ano / 60min (para saber o resultado em horas

    diasPerdidos <- (horas/24)  //de horas para dias
  
  
    diasInteiros <- Int(diasPerdidos) //pegando a parte inteira do dia
    diasDecimais <- (diasPerdidos - diasInteiros) //pegando os decimais do dia
    horasPerdidas <- Int(diasDecimais*24) //convertendo o decimal para horas
  

  

    Escreva ("Você perdeu ",diasInteiros, " dias e ",horasPerdidas, " horas." )





Fimalgoritmo