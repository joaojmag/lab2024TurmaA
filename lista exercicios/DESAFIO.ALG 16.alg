Algoritmo "desafio"

Var
quantidadecigarro,anos,diasperdidos,quantidadeemdias,horas,minutos:real
Inicio

 escreva("quantos cigarros por dia você fumou? ")
 leia (quantidadecigarro)
 escreva( "a quantos anos você fuma")
 leia(anos)

diasperdidos <- quantidadecigarro * anos * 365 * 10
quantidadeemdias<- diasperdidos / 1440
      
horas <-(quantidadeemdias - int(quantidadeemdias)) * 24
minutos<-(horas - int(horas)) * 60
      


 escreval(  "vc perdeu ",int( quantidadeemdias) ,"dias  e", int( horas), "horas e ", int(minutos) , " minutos" )
Fimalgoritmo