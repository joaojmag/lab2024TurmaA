algoritmo "semnome"
var
soma,contador,valores:inteiro

inicio
Escreval("BEM VINDO A CALCULADORA DO BRYAN")
Escreval("=================================")
Escreval("VAMOS CALCULAR 7 VALORES!")
Escreval("===========================")

contador<-1
soma<-0

enquanto (contador <= 7) faca
   Escreva("digite o numero ",contador,":")
   Leia(valores)
   soma<-soma + valores
      contador<-contador+ 1
   fimenquanto
Escreva("a soma de seus numeros foi:",soma)

fimalgoritmo
