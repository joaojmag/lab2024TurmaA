Algoritmo "semnome"

Var
   numero1, numero2: inteiro


Inicio

    escreva("Digite o primeiro número: ")
    leia(numero1)

    escreva("Digite o segundo número: ")
    leia(numero2)

    se numero1 > numero2 então
        escreva("O primeiro valor é o maior.")
    senao se numero2 > numero1 então
        escreva("O segundo valor é o maior.")
    senao
        escreva("Não existe valor maior, os dois são iguais.")
    fimse
Fimalgoritmo