algoritmo "100"
var
n1, n2: inteiro
M: real
S:caractere

funcao Media(x, y: inteiro): real
inicio
    retorne (x + y) / 2
fimfuncao

funcao Situacao(Media: real): caractere
inicio
    se media >= 7 entao
        retorne "APROVADO"
    senao
    se ( media >= 5 ) e ( media < 7 ) entao
        retorne "RECUPERAÇÃO"
    senao
        retorne "REPROVADO"
    fimse
    fimse
fimfuncao

inicio
Escreval("Digite a primeira nota do aluno: ")
Leia(n1)
Escreval("Digite a segunda nota do aluno: ")
Leia(n2)

    M <- Media(n1, n2)
    S <- Situacao(M)
Escreval("A média do aluno é: ", M)

Escreval(  "Situação do aluno:  "   ,S)

fimalgoritmo


