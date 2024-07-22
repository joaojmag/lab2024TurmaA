algoritmo "ATIVIDADE 23"
var
DescontoH:real
DescontoM:real
genero:caractere
compra:real
totalH,totalM:real
inicio

Escreval("Digite o valor da sua compra")

Leia(compra)

Escreval("Digite seu genero,F/M")

Leia(genero)
  DescontoH<-compra*5/100
 DescontoM<-compra*13/100
 totalH <-compra-DescontoH
 totalM <-compra -DescontoM
 Se(genero ="M")entao
 Escreva("DescontoR$",DescontoH)
 
 Escreva(" O total a ser pago é deR$",totaH)
 
 Senao

 Escreval("DescontoR$",DescontoM)

 Escreval(" O total a ser pago é deR$",totaM)
 
 Fimse


fimalgoritmo