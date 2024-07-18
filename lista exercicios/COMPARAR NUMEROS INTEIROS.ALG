algoritmo "Comparar Numeros Inteiros"
var
num1,num2: inteiro

inicio
    // Leitura dos números inteiros
    escreva("Digite o primeiro número: ")
    leia(num1)
    escreva("Digite o segundo número: ")
    leia(num2)

    // Comparação dos números e exibição das mensagens apropriadas
    se num1 > num2 entao
        escreva("O primeiro é o maior")
    senao
        se num1 < num2 entao
            escreva("O segundo é o maior")
        senao
            escreva(" os dois são iguais")
        fimse
    fimse
fimalgoritmo
