algoritmo "Reajuste Salarial"
var
salarioatual, novosalario: real
genero: caractere
anosempresa: inteiro

inicio
    // Leitura dos dados
    escreva("Digite o salário atual: ")
    leia(salarioatual)
    escreva("Digite o gênero do funcionário (M para mulher, H para homem): ")
    leia(genero)
    escreva("Digite há quantos anos ele trabalha na empresa: ")
    leia(anosempresa)

    // Inicializa o novo_salario com o valor do salario_atual
    novosalario := salarioatual

    // Reajuste para mulheres
    se (genero = "M") ou (genero = "m") entao
        se anosempresa < 15 entao
            novosalario := salarioatual * 1.05
        senao
            se anosempresa <= 20 entao
                novosalario := salarioatual * 1.12
            senao
                novosalario := salarioatual * 1.23
            fimse
        fimse
    fimse

    // Reajuste para homens
    se (genero = "H") ou (genero = "h") entao
        se anosempresa < 20 entao
            novosalario := salarioatual * 1.03
        senao
            se anosempresa <= 30 entao
                novosalario := salarioatual * 1.13
            senao
                novosalario := salarioatual * 1.25
            fimse
        fimse
    fimse

    // Exibição do novo salário
    escreva("O novo salário é: ", novosalario:0:2)
fimalgoritmo
