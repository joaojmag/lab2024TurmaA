algoritmo "semnome"
var
A, B: inteiro

procedimento conta(A,B:inteiro)
inicio
   escreval(A + B)
fimprocedimento

procedimento maior(A,B:inteiro)
   inicio
      se (A > B) entao
         escreval("o numero ",A," é maior que o outro numero!")
      senao
         se (B > A) entao
            escreval("o numero ",B," é maior que o outro numero!")
         senao
            se (A = B) e (B = A) entao
               escreval("os dois numeros são iguais!")
      fimse
         fimse
            fimse
fimprocedimento

inicio
escreval("digite um valor")
leia(A)
escreval("digite outro valor")
leia(B)

conta(A,B)
maior(A,B)
fimalgoritmo

