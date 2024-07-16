Algoritmo "Exer-97"

Var
valor, valorMaior, opcao: inteiro
contador, resposta: inteiro


funcao maior(a: inteiro): inteiro
inicio

   se (a > valorMaior)   entao
      valorMaior <- a
   fimSe
  retorne valorMaior
fimFuncao




//============================================

Inicio
   escreval ("FUNÇÃO - MAIOR")
   escreval ()

   enquanto (opcao <> 2) faca

      escreval ("Digite um valor: ")
      leia (valor)

      resposta <- maior(valor)
      escreval ("Deseja continuar?")
      escreval ("[1] Sim")
      escreval ("[2] Não")
      leia (opcao)
   
   
   fimEnquanto
   escreval(" O maior valor digitado foi: ",resposta )
   
   


Fimalgoritmo