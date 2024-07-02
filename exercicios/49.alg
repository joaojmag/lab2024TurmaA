algoritmo "semnome"
var
impar,par,contador,N:inteiro
inicio
Escreval("vamos descobrir se os valores são par ou impar")
Escreval("================================================")

contador<-1

enquanto (contador <= 6) faca
   Escreva("digite o numero ",contador,":")
   Leia(N)
   
   contador<-contador + 1

se (N%2=0) entao
   par<-par+1
   senao
      se (N%2=1) entao
         impar<-impar + 1
fimse
fimse
   
fimenquanto
Escreval("os seguintes numeros são pares:",par)
Escreval("=========================================")
Escreva("os seguintes numeros são impares:",impar)

fimalgoritmo
