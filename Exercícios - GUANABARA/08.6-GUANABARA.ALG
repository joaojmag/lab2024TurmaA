Algoritmo "08.6-GUANABARA"

//Aula #08.6 Guanabara "Uma Partida de Futebol"

var

   time1, time2, diferenca: Inteiro
inicio
      Escreval("TimeA x TimeB")
      EscrevaL("")

      Escreva("Quantos gols time A fez: ")
      Leia(time1)
      EscrevaL("")

      Escreva("Quantos gols time B fez: ")
      Leia(time2)
      EscrevaL("")
      
      diferenca <- ( time1 - time2 )

      Se ( time1 - time2  = 3 ) ou ( time1 - time2 = -3 ) entao
         EscrevaL("---------------------------")
         EscrevaL("DIFERENÇA: 3")
         EscrevaL("STATUS: PARTIDA NORMAL")
         EscrevaL("---------------------------")
      Senao
      
      Se ( time1 - time2  = 0 ) entao
         EscrevaL("---------------------------")
         EscrevaL("DIFERENÇA: 0")
         EscrevaL("STATUS: EMPATE")
         EscrevaL("---------------------------")
      Senao
      
      Se ( time1 - time2  = 5 ) ou ( time1 - time2 = -5 ) entao
         EscrevaL("---------------------------")
         EscrevaL("DIFERENÇA: 5")
         EscrevaL("STATUS: GOLEDA")
         EscrevaL("---------------------------")
         
                 FimSe
            FimSe
      FimSe
fimalgoritmo