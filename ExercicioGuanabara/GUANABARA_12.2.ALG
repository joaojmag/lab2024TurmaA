Algoritmo "GUANABARA_12.2"

var
   num: inteiro

// procedimentos

Procedimento ParOuImpar(num: inteiro)
Inicio

      se (num % 2 = 0) entao
         EscrevaL ("O NÚMERO",num, " é PAR.")
      senao
         EscrevaL ("O NÚMERO",num, " é IMPAR.")
      fimSe

FimProcedimento

Inicio

      Escreva("DIGITE UM NÚMERO: ")
      Leia(num)
      ParOuImpar(num)

fimalgoritmo