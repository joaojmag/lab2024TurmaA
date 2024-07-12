Algoritmo "Exer-85"

Var
   contador, sexo, mulher: inteiro
   nome: caractere
   salario: real
   posicaoNome: vetor[1..3] de caractere
   posicaoSexo: vetor[1..3] de inteiro
   posicaoSalario: vetor[1..3] de real

Inicio
   escreval ("VETORES - FUNCIONÁRIOS")
   contador <- 1
   mulher <- 0
   
   Enquanto (contador <= 3)  faca
      escreval ("Digite o ", contador, "° nome:")
      leia (nome)
      escrevaL ("Digite seu sexo:")
      escreval ("[1] Mulher ")
      escreval ("[2] Homem")
      leia (sexo)
      
      se (sexo = 1) ou (sexo = 2) entao
         escreval ("Digite seu salário: ")
         leia (salario)
      
         posicaoNome[contador] <- nome
         posicaoSexo[contador] <- sexo
         posicaoSalario[contador] <- salario
         
        se (sexo = 1) entao
         se (salario >= 5000) entao
            mulher <- mulher + 1
         fimSe
        fimSe

      senao
         limpaTela
         escreval ("Escolha inválida. Tente novamente")
      fimSe
      escreval ("_________________________________")
      contador <- contador + 1
   fimEnquanto
   limpaTela

   se (mulher <> 0) entao
      escreval (mulher, " mulheres ganham mais de 5 mil")
   seNao
      escreval ("Nenhuma mulher ganha mais que 5 mil.")
   fimSe
      
   para contador de 1 ate 3 faca
      se (posicaoSexo[contador] = 1) entao
         se (salario >= 5000) entao
            escreval (posicaoNome[contador], " ganha: R$" , posicaoSalario[contador])
            escreval ("Posicao: [", contador, "]")
            escreval ("_________________________________")
         fimSe
      fimSe
   fimPara



Fimalgoritmo