Algoritmo "Exer-69"

Var
contador: inteiro
termo1, razao, termo10, termosTotal: inteiro
soma: real
Inicio
   escreval ("CONTAGEM COM 'PARA'- PROGRESSÃO ARITMÉTICA")
   escreval ("Digite o primeiro termo da PA (Progressão Aritmética)")
   leia (termosTotal)
   
   escreval ("Digite a razão da PA (obs: razão é o salto): ")
   leia (razao)
   termo10 <- termosTotal + (10 - 1) * razao
   para termo1 de termosTotal ate termo10 passo razao faca
      escreval (termo1)
   fimPara

   soma <- ( (termo1 + termo10) * 10) / 2
   escreval ("Soma entre todos os valores da sequência é: ", soma)

Fimalgoritmo