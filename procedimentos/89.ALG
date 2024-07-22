algoritmo "89"
var
resposta,frase:caractere
repetir:inteiro

Procedimento caracteresUm( )

inicio
Escreval("+------========-----+")

FimProcedimento

Procedimento caracteresDois( )

inicio
Escreval("-----:::::::::------")

FimProcedimento

Procedimento caracteresTres( )

inicio
Escreval("<<<<<<========>>>>>>")

FimProcedimento

Procedimento gerador (frases:caractere)
inicio
   Escreval(frase)

FimProcedimento
inicio
repetir <- 5
   Escreval("Gerador de Bordas")
   Escreval()

   Escreva("Borda 1: ")
   caracteresUm()

   Escreva("Borda 2: ")
   caracteresDois()

   Escreva("Borda 3: ")
   caracteresTres()

   Escreval("Qual borda você deseja colocar, Borda 1, 2 ou 3? ")
   Leia(resposta)
   
   
   Escreval("Digite a frase qua você deseja: ")
   Leia(frase)
   
   Escreval("E deseja repitir a frase quantas vezes ? (1 a 5) ")
   Leia(repetir)
   
   Se resposta = 1 Entao
      caracteresUm()
   Senao
      Se resposta = 2 ntao
      caracteresDois()
   Senao
      caracteresTres()
   FimSe
   FimSe
   
   Repita
      gerador (frase)
      repetir <- repetir - 1
   Ate repetir = 0
   
   reposta()
   
   
      
   
   




    
       

fimalgoritmo
