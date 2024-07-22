 algoritmo "ATIVIDADE24"
var

km:inteiro

valor:real

inicio
 
 Escreval("Quantos km voce pretende percorrer?")

  Leia(km)

valor<-km *0.50

Se(valor<=200km)entao

Escreval("o valor a ser pago é de",valor)

Fimse

Se(km>200)entao

valor<-km *0.45

Escreval("o total a ser pago é de R$",valor)

Fimse

 fimalgoritmo