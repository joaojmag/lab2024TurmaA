algoritmo "Programa de Pontos por Atividade Física"
var
horasatividade,pontos: inteiro
dinheiro: real

inicio
    // Leitura das horas de atividade física no mês
    escreva("Quala quantidade de horas de atividade física: ")
    leia(horasatividade)

    // Inicializa a variável de pontos
    pontos := 0

    // Cálculo dos pontos baseando-se nas horas de atividade física
    se horasatividade <= 10 entao
        pontos := horasatividade * 2
    senao
        se horasatividade <= 20 entao
            pontos := (10 * 2) + ((horasatividade - 10) * 5)
        senao
            pontos := (10 * 2) + (10 * 5) + ((horasatividade - 20) * 10)
        fimse
    fimse

    // Cálculo do dinheiro ganho com os pontos
    dinheiro := pontos * 0.05

    // Exibição dos resultados
    escreva("Total de pontos: ", pontos, "\n")
    escreva("Dinheiro ganho: R$ ", dinheiro:0:2, "\n")
fimalgoritmo
