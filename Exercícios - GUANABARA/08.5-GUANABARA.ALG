Algoritmo "08.5-GUANABARA"

//Aula #08.5 Guanabara "Aproveitamento Aluno"

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

      Se ( media  >= 9 ) entao
         EscrevaL("---------------------------")
         EscrevaL("MÉDIA:", media)
         EscrevaL("APROVEITAMENTO: A")
         EscrevaL("---------------------------")
      Senao
           Se ( media  >= 9 ) e ( media <= 10) entao
               EscrevaL("---------------------------")
               EscrevaL("MÉDIA:", media)
               EscrevaL("APROVEITAMENTO: A")
               EscrevaL("---------------------------")
           Senao
           Se ( media  <= 8.9 ) e ( media >= 8) entao
               EscrevaL("---------------------------")
               EscrevaL("MÉDIA:", media)
               EscrevaL("APROVEITAMENTO: B")
               EscrevaL("---------------------------")
           Senao
           Se ( media  <= 7.9 ) e ( media >= 7)entao
               EscrevaL("---------------------------")
               EscrevaL("MÉDIA:", media)
               EscrevaL("APROVEITAMENTO: C")
               EscrevaL("---------------------------")
           Senao
           Se ( media  <= 6.9 ) e ( media >= 6)entao
               EscrevaL("---------------------------")
               EscrevaL("MÉDIA:", media)
               EscrevaL("APROVEITAMENTO: D")
               EscrevaL("---------------------------")
           Senao
           Se ( media  <= 5.9 ) e ( media >= 5)entao
               EscrevaL("---------------------------")
               EscrevaL("MÉDIA:", media)
               EscrevaL("APROVEITAMENTO: E")
               EscrevaL("---------------------------")
           Senao
               EscrevaL("---------------------------")
               EscrevaL("MÉDIA:", media)
               EscrevaL("APROVEITAMENTO: F")
               EscrevaL("---------------------------")
            FimSe
                           FimSe
                      FimSe
                 FimSe
            FimSe
      FimSe
fimalgoritmo