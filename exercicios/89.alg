algoritmo "semnome"
var
procedimento gerador(mensagem:caractere;cnt:inteiro;linha:inteiro)
var
inte:inteiro

inicio
   para inte de 1 ate cnt faca
      escreva(mensagem)
   fimpara

   escolha linha
      caso 1
         escreval("+-------=======------+")
      caso 2
         escreval("~~~~~~~~:::::::~~~~~~~")
      caso 3
         escreval("<<<<<<<<------->>>>>>>")
      outrocaso
         escreval("")
   fimescolha
fimprocedimento

inicio
   gerador("", 0, 2)
   gerador("Aprendendo portugol!", 2, 0)
   gerador("", 0, 2)
fimalgoritmo

