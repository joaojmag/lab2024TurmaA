Algoritmo "Exer-88"

Var
contador: inteiro
//______________________________

Procedimento linha ()
inicio
   escreval ("+-------=======------+")
fimProcedimento

Procedimento gerador (frases: caractere)
inicio
   escreval (frases)
fimProcedimento

// ___________________________

Inicio
contador <- 0
   escreval ("PROCEDIMENTOS - REPITA")
   escreval()

   linha()
   repita
      gerador (" Aprendendo Portugol ")
      contador <- contador + 1
   ate contador  >=  4
   linha()
Fimalgoritmo