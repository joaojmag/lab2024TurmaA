Algoritmo "Exer-68"

Var
contador, peso, sexo, soma: inteiro
mulher, homem, homem2, maiorPeso: inteiro
media: real
inicio
   escreval ("CONTAGEM COM 'PARA' ")
   para contador <- 1 ate  3 faca
      escreval (contador, "° pessoa:")
      escreval ("Qual seu peso (Kg)? ")
      leia(peso)
      escreval ("Qual seu sexo? ")
      escreval (" [1] Mulher")
      escreval (" [2] Homem")
      leia (sexo)
      
      se (sexo = 1) ou (sexo = 2) entao
         Escolha sexo
            caso 1
               mulher <- mulher + 1
               soma <- soma + peso
               media <- soma / mulher
            caso 2
               homem <- homem + 1
               se (peso > 100) entao
                  homem2 <- homem
               fimSe
               se (peso > maiorPeso) entao
                  maiorPeso <- peso
               fimSe
         fimEscolha
      senao
            escreval ("Resposta inválida")
      fimSe
   fimPara
   
   se (mulher <> 0) entao
      escreval (mulher, " mulheres foram cadastradas.")
      escreval ("A média de peso entre as mulheres é: ", media:6:2)
   senao
      escreval ("Nunhuma mulher foi cadastrada.")
   fimSe
   se (homem <> 0) entao
      escreval ("O maior peso entre os homens é: ", maiorPeso)
      se (homem2 > 100) entao
         escreval (homem2, " homens pesam mais de 100Kg.")
      senao
         escreval ("Nenhum homem com mais de 100 Kg foi cadastrado.")
      fimSe
   senao
      escreval ("Nenhum homem foi cadastrado.")
   fimSe
   

Fimalgoritmo