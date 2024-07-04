Algoritmo "GUANABARA_09.5"


var

    reais, dolar : Real
    conversor, vezes : Inteiro

inicio

      EscrevaL ("CONVERSOR DE MOEDAS")
      Escreval("DE DÓLAR PARA REAL.")
      EscrevaL ("-----------------------")

      Escreva("QUANTAS VEZES DESEJA CONVERTER? ")
      Leia(vezes)

      Enquanto (conversor < vezes) faca

         Escreva("INSIRA O VALOR EM R$: ")
         Leia(reais)

         dolar <- reais/2.20
         EscrevaL("O VALOR CONVERTIDO EM US$ É: ", dolar:5:2)
         conversor <- conversor + 1

      FimEnquanto

fimalgoritmo