algoritmo "77"

var
nomes:vetor [0..7] de caractere
i:inteiro

inicio
para i de 1 até 7 faça
    escreva("Digite o nome ", i, ": ")
    leia(nomes[i])
fimpara


escreva("Nomes na ordem inversa:  ")
para i de 7 até 1 passo -1 faça
    escreva(nomes[i],  "   " )
fimpara

fimalgoritmo
