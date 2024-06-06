algoritmo "exercicio_36"
var

   horas: inteiro
   pontos_2, pontos_5, pontos_10: real

inicio

      Escreval("VAMOS ANALISAR QUANTOS PONTOS VOCÊ ACUMULOU ESSE MÊS")
      Escreval("NOS SEUS TREINOS!")
      Escreval("--------------------------------------")
      Escreval("QUANTAS HORAS VOCÊ TREINOU ESSE MÊS: ")
      Leia(horas)
      Escreval("--------------------------------------")
      
      pontos_2 <- horas*2
      pontos_5 <- horas*5
      pontos_10 <- horas*10
      
      se (horas < 10) entao
         Escreval("VOCÊ ACUMULOU", pontos_2, " PONTOS ESSE MÊS.")
         Escreval("SUA FATURA É DE R$", pontos_2*0.05, " NO TOTAL")
           senao
             se (horas >= 10) e (horas < 20) entao
                Escreval("VOCÊ ACUMULOU", pontos_5, " PONTOS ESSE MÊS.")
                Escreval("SUA FATURA É DE R$", pontos_5*0.05, " NO TOTAL")
                  senao
                    se (horas >= 20) entao
                       Escreval("VOCÊ ACUMULOU", pontos_10, " PONTOS ESSE MÊS.")
                       Escreval("SUA FATURA É DE R$", pontos_10*0.05, " NO TOTAL")
                  fimse
             fimse
         fimse
      
      Escreval("-------------------------------------")
      Escreva("VAMOS CONTINUAR TREINANDO !!")

fimalgoritmo