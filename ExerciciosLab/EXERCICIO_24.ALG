algoritmo "exercicio_24"
var
   distancia, valor1, valor2: real
inicio

    Escreva("QUAL A DISTANCIA QUE O SENHOR(A) DESEJA PERCORRER?(KM): ")
    Leia(distancia)
    Escreval("----------------------------------")
    Escreval("MUITO OBRIGADO POR VIAJAR CONOSCO.")
    valor1 <- distancia*0.5
    valor2 <- distancia*0.45

    se distancia<=200 entao
       Escreval("O VALOR DA VIAJEM FOI DE ", valor1:4:2, " REAIS")
    senao
         se distancia>200 entao
            Escreval("O VALOR DA VIAJEM FOI DE ", valor2:4:2, " REAIS")
    fimse
    fimse
fimalgoritmo