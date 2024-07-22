algoritmo "97"
var
n1, n2, n3, M:inteiro

funcao Maior(x, y, z:inteiro):inteiro
inicio
    Se (x > y) e (x > z) Entao
        retorne x
    Senao
        Se (y > x) e (y > z) Entao
            retorne y
        Senao
            retorne z
        fimse
    fimse
fimfuncao

inicio

Escreval("Digite o primeiro valor: ")
Leia(n1)
Escreval("Digite o segundo valor: ")
Leia(n2)
Escreval("Digite o terceiro valor: ")
Leia(n3)

M <- Maior(n1, n2, n3)

Escreval("O maior número é o: ", M)

fimalgoritmo
