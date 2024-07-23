algoritmo "semnome"
var
inic,fim,incremento:inteiro

procedimento contador(inic,fim,incremento:inteiro)
   var
      inte:inteiro
   inicio
      para inte de inic ate fim passo incremento faca
         escreva(inte, " >>")
      fimpara
   Escreval("fim")
fimprocedimento

inicio
   Escreval("Digite o valor de início: ")
   Leia(inic)
   Escreval("Digite o valor de fim: ")
   Leia(fim)
   Escreval("Digite o valor de incremento: ")
   Leia(incremento)
   contador(inic, fim, incremento)
fimalgoritmo

