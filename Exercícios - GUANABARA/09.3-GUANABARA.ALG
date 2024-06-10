Algoritmo "09.3-GUANABARA"

//Aula #09.3 Guanabara "Conta até onde você quiser com While"

var

   valorDesejado, pulo, contador: Inteiro

inicio

      EscrevaL (" _________________________________________" )
      EscrevaL ("|                                         |")
      EscrevaL ("| Contador de 0 até sua escolha com While |")
      EscrevaL ("|_________________________________________|")
      EscrevaL (" ")

      contador <- 0
      Escreva(" Deseja contar até quando? ")
      Leia(valorDesejado)
      
      Escreva(" Deseja contar de quanto em quanto? ")
      Leia(pulo)

      Enquanto (contador <= valorDesejado ) faca
               EscrevaL(contador)
               contador <- contador + pulo
      FimEnquanto
      
      Escreva(" Fim da Contagem. ")

fimalgoritmo