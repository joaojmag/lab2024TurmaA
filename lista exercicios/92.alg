algoritmo "semnome"
var
numero: inteiro

procedimento ParOuImpar(numero:inteiro)
inicio
   se (numero % 2 = 0) entao
      escreval("o seguinte numero é par ", numero)
   senao
      escreval("o seguinte numero é impar ", numero)
   fimse
fimprocedimento

inicio
   escreva("digite um valor:")
   leia(numero)
   ParOuImpar(numero)
fimalgoritmo

