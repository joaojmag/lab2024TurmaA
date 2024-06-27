algoritmo "Aluguel de Carros"
var
tipocarro: caractere
diasaluguel: inteiro
kmpercorridos: real
custototal,custodiaria,custokm: real

inicio
    // Leitura dos dados
    escreva("Digite o tipo de carro alugado (P para popular, L para luxo): ")
    leia(tipocarro)
    escreva(" a quantidade de dias de aluguel: ")
    leia(diasaluguel)
    escreva("qual a quantidade de Km percorridos: ")
    leia(kmpercorridos)

    // Inicializa os custos
    custodiaria := 0
    custokm := 0

    // Cálculo do custo total baseado no tipo de carro e Km percorridos
    se (tipocarro = "P") ou (tipocarro = "p") entao
        custodiaria := diasaluguel * 90
        se kmpercorridos <= 100 entao
            custokm := kmpercorridos * 0.20
        senao
            custokm := 100 * 0.20 + (kmpercorridos - 100) * 0.10
        fimse
    senao
        se (tipocarro = "L") ou (tipocarro = "l") entao
            custodiaria := diasaluguel * 150
            se kmpercorridos <= 200 entao
                custokm := kmpercorridos * 0.30
            senao
                custokm := 200 * 0.30 + (kmpercorridos - 200) * 0.25
            fimse
        fimse
    fimse

    custototal := custodiaria + custokm

    // Exibição do custo total
    escreva("O preço a ser pago é: R$ ", custototal:0:2, "\n")
fimalgoritmo
