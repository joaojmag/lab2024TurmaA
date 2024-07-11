Algoritmo "GUANABARA_12.1"

var
   i: inteiro
   nome, pessoaPesada: caracter
   peso, maisPesada: real

Inicio

      Para i <- 1 ate 5 faca
           Escreva("DIGITE O NOME DA PESSOA: " )
           Leia(nome)
           Escreva("DIGITE O PESO DE ", nome, ": ")
           Leia(peso)
           Escreval("")

           se (peso > maisPesada) entao
              maisPesada <- peso
              pessoaPesada <- nome
           fimSe

      FimPara

      Escreval("------------------------------")
      EscrevaL ("A PESSSOA MAIS PESADA É ", pessoaPesada, " COM", maisPesada, "KG. ")

fimalgoritmo