Algoritmo "Exer-93"

Var
inicial, final, salto: inteiro
contador: inteiro

procedimento contador(a, b, c: inteiro)
inicio
   se (a < b) entao
      para contador de a ate b passo c faca
         escreval (contador)
      fimPara
   seNao
      se (b < a) entao
         para contador de a ate b passo - c faca
            escreval (contador)
         fimPara
      seNao
         escreval ("os valores são iguais")
      fimse
   fimSe
fimProcedimento
Inicio
   escreval ("PROCEDIMENTO - CONTAGEM")
   escreval()
   escreval ("Vamos fazer uma contagem?")
   escreva  ("Digite o valor inicial: ")
   leia(inicial)
   escreva  ("Digite o valor final: ")
   leia (final)
   escreva  ("Digite o valor do salto: ")
   leia (salto)
   
   contador(inicial, final, salto)

Fimalgoritmo