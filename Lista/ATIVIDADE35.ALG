algoritmo "ATIVIDADE35"

var

escolhe,pagamento,dias,somadias:inteiro

somaKm,somaTudo,km:real

inicio

   Escreval("Qual tipo de carro voce escolhe?")

   Escreval("[1]carros populares")

   Escreval("[2]carros de luxo")

   Leia(escolhe)

   Escreval("Quantos km voce percorreu?")

   Leia(km)

   Escreval("Por quantos dias voce usou o veiculo?")

   Leia(dias)

   Se(escolhe = 1)entao

      somadias <-90 * dias

      Se(km <= 100)entao


         somaKm <- km * 0.20

      Fimse

      Se(km > 100)entao

         somaKm <- km * 0.10

      Fimse

      somaTudo <- somadias + somaKm

      Escreva("O total a ser pago é de R$", somaTudo)

   Fimse

   Se(escolhe = 2)entao

      somadias <-150 * dias

      Se(km <= 200)entao

         somaKm <- km * 0.30

      Fimse

      Se(km > 200)entao

         somaKm <- km * 0.25

      Fimse

      somaTudo <-somadias + somaKm

      Escreva("O total a ser pago é de R$",somaTudo)

   Fimse

fimalgoritmo