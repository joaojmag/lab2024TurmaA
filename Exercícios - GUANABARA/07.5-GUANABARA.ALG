Algoritmo "07.5-GUANABARA"

//Aula #07.5 Guanabara "Aprovado ou Reprovado"

var

   nota1, nota2: Inteiro
   media: Real
inicio
      Escreval("ESCOLA DO CLEYTIN:")
      EscrevaL("")

      Escreva("Digite a Primeira Nota: ")
      Leia(nota1)
      EscrevaL("")

      Escreva("Digite a Segunda Nota: ")
      Leia(nota2)
      EscrevaL("")

      media <-  ( nota1 + nota2 ) / 2
      
      Se ( media  >= 6 ) entao
         EscrevaL("---------------------------")
         EscrevaL("MÉDIA:", media)
         EscrevaL("ALUNO APROVADO")
         EscrevaL("---------------------------")
      Senao
         EscrevaL("---------------------------")
         EscrevaL("MÉDIA:", media)
         EscrevaL("ALUNO REPROVADO")
         EscrevaL("---------------------------")
      FimSe

fimalgoritmo