Algoritmo "Ex25"

//25) [DESAFIO] Crie um programa que leia o tamanho de três segmentos de reta.
//Analise seus comprimentos e diga se é possível formar um triângulo com essas
//retas. Matematicamente, para três segmentos formarem um triângulo, o comprimento
//de cada lado deve ser menor que a soma dos outros dois.

var

   L1, L2, L3: Real
   TRI: Logico

inicio

      Escreva("Digite o primeiro lado: ")
      Leia(L1)
      Escreva("Digite o segundo lado: ")
      Leia(L2)
      Escreva("Digite o terceiro lado: ")
      Leia(L3)

      TRI <- (L1 < L2 + L3) e (L2 < L1 + L3) e (L3 < L1 + L2)
      
      Se ( TRI = verdadeiro) entao
      Escreval ("É Possível formar um Triângulo.")
      senao
      Escreval ("Não é Possível formar um Triângulo.")
      FimSe

fimalgoritmo