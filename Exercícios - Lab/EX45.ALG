Algoritmo "Ex45"

//45) O programa acima vai ter um problema quando digitarmos o primeiro valor
//maior que o último. Resolva esse problema com um código que funcione em qualquer
//situação.

Var
   numPulo, numInicial, numFinal : Inteiro
   validar : Caracter

inicio

      Enquanto ( validar <> "valido") faca
      
      EscrevaL (" _____________________________________________" )
      EscrevaL ("|                                             |")
      EscrevaL ("| Contador Personalizado mediante sua escolha |")
      EscrevaL ("|_____________________________________________|")
      EscrevaL (" ")

      EscrevaL("")
      Escreva(" Deseja começar da onde? ")
      Leia(numInicial)

      EscrevaL("")
      Escreva(" Deseja Contar até quanto? ")
      Leia(numFinal)
      
      EscrevaL("")
      Se (numFinal > numInicial) Entao

         EscrevaL("")
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
         validar <- "valido"

         Senao
              limpatela
              EscrevaL("O número Inicial deve ser menor que o Final!!")
              EscrevaL("")
         FimSe
      
      FimEnquanto

fimalgoritmo