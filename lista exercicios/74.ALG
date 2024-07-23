algoritmo "74"
var
    v: vetor[1..10] de inteiro
    i: inteiro

inicio
    // Preenchimento do vetor alternando entre 5 e 3
    para i de 1 ate 10 faca
        se i % 2 = 1 entao
            v[i] := 5
        senao
            v[i] := 3
        fimse
    fimpara

    // Exibindo o vetor
    escreva("Vetor: ")
    para i de 1 ate 10 faca
        escreva(v[i], " ")
    fimpara
    escreval()
fimalgoritmo
