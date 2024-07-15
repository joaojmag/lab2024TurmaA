Algoritmo "Exer-89"

Var
contador: inteiro
borda: inteiro
//______________________________
Procedimento linha ()
inicio
   se (borda = 1) entao
      escreval ("+-------=======------+")
   seNao
      se (borda = 2) entao
         escreval ("~~~~~~~~:::::::~~~~~~~")
      seNao
         se (borda = 3) entao
            escreval("<<<<<<<<------->>>>>>>")
         fimSe
      fimSe
   fimSe
fimProcedimento


Procedimento gerador (frases: caractere)

inicio
   escreval (frases)
fimProcedimento

// ___________________________



Inicio

contador <- 0
   escreval ("PROCEDIMENTOS - BORDA")
   escreval()

   escreval ("Escolha a borda para a frase: ")
   escreval ("[1] +-------=======------+ ")
   escreval ("[2] ~~~~~~~~:::::::~~~~~~~ ")
   escreval ("[3] <<<<<<<<------->>>>>>> ")
   leia (borda)
   
   linha()
   repita
      gerador (" Portugol Studio ")
      contador <- contador + 1
   ate contador  >=  3
   linha()



Fimalgoritmo