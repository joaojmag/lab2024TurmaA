Algoritmo "semnome"


var
nota1, nota2, media: real

Inicio


    escreva("Digite a primeira nota : ")
    leia(nota1)


    escreva("Digite a segunda notao: ")
    leia(nota2)


    media <- (nota1 + nota2) / 2


    escreva("A média do aluno é: ", media)

    se media < 5.0 então
        escreva(" - REPROVADO")
    senao se media >= 5.0 e media <= 6.9 então
        escreva(" - RECUPERAÇÃO")
    senao
        escreva(" - APROVADO")
    fimse

Fimalgoritmo