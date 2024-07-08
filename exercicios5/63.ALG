Algoritmo "63"

var
numero, soma, menorValor, valoresPares, contador: inteiro
media: real
resposta: caractere

inicio
resposta <- "S"
menorValor <- 0
contador <- 0
valoresPares <- 0
soma <- 0

Enquanto resposta = "S" faca
Escreval("Digite um número: ")
Leia(numero)

      soma <- soma + numero
      contador <- contador + 1

      Se contador = 1 Entao
         menorValor <- numero
      Senao
         numero < menorValor Entao
         menorValor <- numero
      Fimse


      Se numero % 2 = 0 Então
         valoresPares <- valoresPares + 1
      FimSe
      
      media <- soma / contador

Escreval("Deseja continuar adicionando números? (S ou N): ")
Leia(resposta)

FimEnquanto

Escreval("A soma de todos os valores é: ", soma, "\n")
Escreval("O menor valor digitado foi: ", menorValor, "\n")
Escreval("A média dos valores digitados é: ", media, "\n")
Escreval("Quantidade de valores que são pares: ", valoresPares)

fimalgoritmo
