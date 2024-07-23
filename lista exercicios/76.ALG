algoritmo "76.alg"
var
v: vetor[0..7]de inteiro
i: inteiro
embaralhar: inteiro

inicio


    para i de 0 até 6 faça
    embaralhar <- randi(1000)

        v[i] <- embaralhar
    fimpara


    escreva("Números gerados:")
    para i de 0 até 6 faça
        escreva(v[i], " ")
    fimpara
fimalgoritmo
