algoritmo "82"
var
idades:vetor[0..8]de inteiro
somaIdades, maiorIdade, i: inteiro
posicoesMaiorIdade: caractere
mediaIdade:real
inicio
    somaIdades <- 0
    maiorIdade <- 0
    posicoesMaiorIdade <- ""
    

    para i de 0 até 7 faça
        escreva("Digite a idade da pessoa ", i + 1, " : ")
        leia(idades[i])
        somaIdades <- somaIdades + idades[i]
        se idades[i] > maiorIdade então
            maiorIdade <- idades[i]
        fimse
    fimpara

    mediaIdade <- somaIdades / 8
    escreva(" Média de idade das pessoas cadastradas: ", mediaIdade, "  ")

    escreva(" Posições com pessoas com mais de 25 anos: ")
    para i de 0 até 7 faça
        se idades[i] > 25 então
            escreva(i, " ")
        fimse
    fimpara
    escreva("  ")


    escreva(" Maior idade digitada: ", maiorIdade, " ")
    escreva( Posições onde a maior idade foi digitada: ")
    para i de 0 até 7 faça
        se idades[i] = maiorIdade então
            escreva(i, " ")
        fimse
    fimpara
    escreva(" ")
fimalgoritmo
