Algoritmo "11.3-GUANABARA"

//Aula #11.3 Guanabara "Quantos valores estão entre 0 e 10 e soma dos ímpares"

var

   cont, num, total010, somaImpar : Inteiro

inicio

      EscrevaL (" ____________________________" )
      EscrevaL ("|                            |")
      EscrevaL ("| Quantos estão entre 0 e 10 |")
      EscrevaL ("|____________________________|")
      EscrevaL (" ")

      Para cont <- 1 ate 6 faca
      
           Escreva("Digite um número: ")
           Leia(num)
           
           Se (num >= 0) e (num <= 10) entao
              total010 <- total010 + 1

              Se (num % 2 = 1) entao
                 somaImpar <- somaImpar + num
                 
              FimSe
         FimSe
      FimPara
      EscrevaL("Ao todo foram digitados:", total010, " valores entre 0 e 10. ")
      EscrevaL("A soma dos números ímpares foi", somaImpar)
      
fimalgoritmo