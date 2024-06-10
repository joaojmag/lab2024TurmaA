Algoritmo "09.5-GUANABARA"

//Aula #09.5 Guanabara "Converter Moedas"

var

    reais, dolar : Real
    converter, vezes : Inteiro
    //Dolar a 2.20

inicio

      EscrevaL (" _____________________" )
      EscrevaL ("|                     |")
      EscrevaL ("| Conversor de Moedas |")
      EscrevaL ("|_____________________|")
      EscrevaL (" ")

      Escreva(" Quantes vezes deseja converter? ")
      Leia(vezes)
      
      Enquanto (converter < vezes ) faca

         Escreva(" Insira o valor em R$: ")
         Leia(reais)

         dolar <- reais/2.20
         EscrevaL(" O valor convertido em US$ é: ", dolar:5:2)
         converter <- converter + 1
         
      FimEnquanto

fimalgoritmo