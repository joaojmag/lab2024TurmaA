Algoritmo "Exer-43"

Var
 contagem:inteiro

Inicio
  escreval ("Vamos fazer uma contagem:")

   contagem <- 30

   enquanto  (contagem>=1) faca
             escreval (contagem)
             contagem <-contagem -1

   se (contagem % 4=0) entao
      escreval ("[",contagem,"]")
      contagem <- contagem -1
   fimse
   
   fimEnquanto
   
   escreval  ("Acabou!")


Fimalgoritmo