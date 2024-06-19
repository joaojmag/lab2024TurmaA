Algoritmo "09.4-somadorNumerico"

Var
  contador, valor, soma, maior: inteiro


Inicio
    contador <- 1
    soma <- 0
    Enquanto (contador <= 5) faca
             escreva ("Digite o", contador,"° valor: ")
             leia (valor)
             
             se (valor>maior) entao
              maior <- valor
             fimSe
             
             soma <- soma+valor
             contador <- contador +1
    fimEnquanto

    escreval ("A soma de todos os  valores é: ",soma)
    escreva  ("O maior valor digitado foi: ",maior)

Fimalgoritmo