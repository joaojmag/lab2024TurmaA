Algoritmo "59"

Var
sexo, continuar: Caractere
idade, maiorIdade, menorIdade, somaIdadeHomens:inteiro
mediaHomens: real
homensCadastrados, mulheresCadastradas: Inteiro
entrarGeral, entrarMulher: Logico

Inicio
homensCadastrados <- 0
mulheresCadastradas <- 0
continuar <- "S"
entrarGeral <- verdadeiro
entrarMulher <- verdadeiro
somaIdadeHomens <- 0

Enquanto continuar = "S" Faça
Escreva("Digite o sexo da pessoa (M/F): ")
Leia(sexo)
Escreva("Digite a idade da pessoa: ")
Leia(idade)

        // Maior idade lida
   Se entrarGeral Entao
      maiorIdade <- idade
         entrarGeral <- falso
   Senao
   Se idade > maiorIdade Entao
      maiorIdade <- idade
   FimSe
   FimSe

        // Contagem de homens e soma das idades
   Se sexo = "M" Entao
      homensCadastrados <- homensCadastrados + 1
      somaIdadeHomens <- somaIdadeHomens + idade
   Senao
      mulheresCadastradas <- mulheresCadastradas + 1
   // Menor idade mulher
   Se entrarMulher Entao
      menorIdade <- idade
      entrarMulher <- falso
   Senao
   Se idade < menorIdade Entao
      menorIdade <- idade
   FimSe
   FimSe
   FimSe

Escreva("Deseja continuar adicionando pessoas? (S/N): ")
Leia(continuar)


    // Cálculo da média de idade dos homens
    Se homensCadastrados > 0 Entao
        mediaHomens <- somaIdadeHomens / homensCadastrados
    Senao
        mediaHomens <- 0 // Se não houver homens cadastrados, média é 0
    FimSe
    
FimEnquanto

Escreval("Maior idade lida: ", maiorIdade)
Escreval("Quantidade de homens cadastrados: ", homensCadastrados)
Escreval("Idade da mulher mais jovem: ", menorIdade)
Escreval("Média da idade dos homens: ", mediaHomens)

FimAlgoritmo
