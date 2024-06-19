Algoritmo "Exer-49"

Var
 contador, valor, par, impar: inteiro

Inicio
    contador <- 1
    escreval ("QUAIS VALORES SÃO PARES E QUAIS SÃO ÍMPARES.")
    
    Enquanto (contador <= 6) faca
             escreva ("Digite o", contador,"° valor: ")
             leia (valor)
         se (valor % 2 = 0) entao
            par <- par + 1
            contador <- contador +1
         senao
              impar <- impar +1
              contador <- contador +1
         fimSe
    fimEnquanto
    
    Escreval (par, " números são PARES.")
    escreva  (impar, " números são ÍMPARES.")
    

Fimalgoritmo