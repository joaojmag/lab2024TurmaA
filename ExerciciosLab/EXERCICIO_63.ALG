algoritmo "exercicio_63"
var

   resp: caractere
   numero, valores, soma, valorPar, menor: inteiro
   mediaFinal: real

inicio

      menor <- 999999
      resp <- "S"
      Enquanto (resp = "S") faca
               Escreva("DIGITE UM NÚMERO: ")
               Leia(numero)
               
               valores <- valores + 1
               soma <- soma + numero

               se (numero%2=0) entao
                  valorPar <- valorPar + 1
               fimse
               
               se (menor > numero) entao
                  menor <- numero
               fimse

               Escreva("DESEJA CONTINUAR?[S/N]: ")
               Leia(resp)
               
               Escreval("")

     fimenquanto
     
     mediaFinal <- soma/valores
     
     Escreval("----------------------------")
     Escreval(soma, " SOMA DOS NÚMEROS APRESENTADOS.")
     Escreval(menor, " FOI O MENOR NÚMERO APRESENTADO.")
     Escreval(mediaFinal:5:2, " É A MÉDIA ENTRE OS NÚMEROS APRESENTADOS.")
     Escreval(valorPar, " SÃO PARES.")
     
     
fimalgoritmo