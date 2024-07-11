Algoritmo "14.5-GUANABARA"

//Aula #14.5 Guanabara PLUS "Torneio de Futebol"

var
   vet : vetor[1..3] de Caracter
   i, c, aux: Inteiro

//Procedimentos

Procedimento NavBar()
Inicio
      LimpaTela
      EscrevaL (" ____________________" )
      EscrevaL ("|                    |")
      EscrevaL ("| Torneio de Futebol |")
      EscrevaL ("|____________________|")
      EscrevaL (" ")

FimProcedimento

Inicio
      NavBar()

      Para i <- 1 ate 3 faca
           Escreva ("Digite o",i,"º Time: ")
           Leia(vet[i])
      FimPara
      
      LimpaTela
      
      NavBar()

      EscrevaL(vet[1]," [ ] x [ ] ", vet[2])
      EscrevaL(vet[1]," [ ] x [ ] ", vet[3])

      EscrevaL(vet[2]," [ ] x [ ] ", vet[1])
      EscrevaL(vet[2]," [ ] x [ ] ", vet[3])
      
      EscrevaL(vet[3]," [ ] x [ ] ", vet[1])
      EscrevaL(vet[3]," [ ] x [ ] ", vet[2])

fimalgoritmo