algoritmo "88"
var
resposta,quantidade:inteiro

Procedimento caracteres( )

inicio
Escreval("+--------------------+")

FimProcedimento

Procedimento Gerador ( palavras: caractere )
inicio

   Escreval(palavras)
   
FimProcedimento
inicio

quantidade <- 6

   Escreval("Procedimento Gerador")
   Escreval()

   caracteres()
   
   Repita
    Gerador(" Aprendendo Portugol " )
   
   quantidade <- quantidade - 1
   
   ate quantidade = 0
   
   caracteres()

fimalgoritmo
