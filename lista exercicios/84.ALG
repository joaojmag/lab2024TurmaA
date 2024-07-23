algoritmo "84"
var
nomes:vetor[0..9]de caractere
idades:vetor[0..9]de inteiro
i: inteiro
inicio

    para i de 0 até 8 faça
        escreva("Digite o nome da pessoa ", i + 1, ": ")
        leia(nomes[i])
        escreva("Digite a idade da pessoa ", i + 1, ": ")
        leia(idades[i])
    fimpara


    escreva("Listagem das pessoas menores de idade:  ")
    para i de 0 até 8 faça
        se idades[i] < 18 então
            escreva("Nome: ", nomes[i], " - Idade: ", idades[i], "  ")
        fimse
    fimpara
fimalgoritmo
