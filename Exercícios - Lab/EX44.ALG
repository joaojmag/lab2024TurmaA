Algoritmo "Ex44"

//44) Crie um algoritmo que leia o valor inicial da contagem, o valor final e o
//incremento, mostrando em seguida todos os valores no intervalo: Ex: Digite o
//primeiro Valor: 3
//Digite o último Valor: 10
//Digite o incremento: 2
//Contagem: 3 5 7 9 Acabou!

Var
   numPulo, numInicial, numFinal : Inteiro

inicio

      EscrevaL (" _____________________________________________" )
      EscrevaL ("|                                             |")
      EscrevaL ("| Contador Personalizado mediante sua escolha |")
      EscrevaL ("|_____________________________________________|")
      EscrevaL (" ")

      Escreva(" Deseja começar da onde? ")
      Leia(numInicial)

      Escreva(" Deseja Contar até quanto? ")
      Leia(numFinal)
      
      Escreva(" Deseja Contar de quanto em quanto? ")
      Leia(numPulo)

      EscrevaL("")
      Enquanto (numInicial <= numFinal ) faca

               Escreva(numInicial)
               numInicial <- numInicial + numPulo


      FimEnquanto

      EscrevaL("")
      EscrevaL("")
      EscrevaL( " Acabou!" )

fimalgoritmo