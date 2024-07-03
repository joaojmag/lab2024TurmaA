Algoritmo "Exer-63"

Var
contador, soma, numero, valorPar, menorValor: inteiro
media: real
resposta: caractere
Inicio
   contador <- 1
   valorPar <- 0
   soma <- 0
   escreval ("CONTAGEM COM 'REPITA' - NÚMEROS")
   
   repita
      escreval ("Digite o ", contador, "° número?")
      leia (numero)
      escreval ("Deseja continuar?")
      escreval  ("[s/n]")
      leia (resposta)

      se (resposta = "s") ou (resposta = "n") entao


         se (contador = 1) entao
            menorValor <- numero
         fimSe

         se (numero < menorValor) entao
            menorValor <- numero
         fimSe

         se (numero % 2 = 0) entao
            valorPar <- valorPar + 1
         fimSe

         soma <- soma + numero
         contador <- contador + 1

      senao
         escreval ("Resposta inválida!")
      fimSe
   ate (resposta = "n")
   media <- soma / (contador - 1)
   escreval ()
   escreval ("A soma entre os números digitados é: ", soma)
   escreval ("O menor valor digitado foi: ", menorValor)
   escreval ("A média entre as idades é: ", media:6:2)
   escreval (valorPar, " valores são pares.")
   
Fimalgoritmo