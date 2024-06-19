Algoritmo "Exer-51"

Var
 contador: inteiro
 valor, maior, menor: real
Inicio

    contador <- 1
    
    escreval ("DIGITE O PREÇO DE ALGUNS PRODUTOS:")
    
    Enquanto (contador <= 5) faca
             escreva ("Qual valor do", contador,"° produto: R$")
             leia (valor)
             
             se (valor>maior) entao
              maior <- valor
             fimSe

             se (valor < menor) entao
              menor <- valor
             fimse

     contador <- contador +1

    fimEnquanto

    escreval  ("O maior valor digitado foi: ",maior)

    escreva  ("O menor valor digitado foi: ",menor)


Fimalgoritmo