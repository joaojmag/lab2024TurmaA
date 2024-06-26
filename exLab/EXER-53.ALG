Algoritmo "Exer-53"

Var
contador, idade, genero: inteiro
mulher, homem, mulherVinte, valor: inteiro
 media, soma: real
homem2, mulher2: inteiro
Inicio
   soma <- 0
   mulher <- 0
   mulherVinte <- 0
   homem <- 0
   contador <- 1
   valor <- 2
   mulher2 <- 0
   homem2 <- 0
   EscrevaL ("Vamos cadastrar algumas pessoas:")
   Enquanto (contador <= valor) faca
      escreval ("Qual ", contador,"° idade: ")
      leia (idade)
      escreval (" Qual seu gênero: ")
      escreval ("[1] Mulher")
      escreval ("[2] Homem")
      leia (genero)
      se (genero=1) ou (genero=2) entao
         Escolha genero
            caso 1
               mulher <- mulher +1
               se (idade>20) entao
               mulherVinte <- mulherVinte+ 1
               fimse
            caso 2
               homem <- homem + 1
         fimEscolha
      senao
         escreval ("Escolha inválida")
      fimSe
      
      se (genero = 1) entao
         mulher2 <- genero
      senao
         //se (genero = 2) entao
            homem2 <- genero
         //fimse
      fimse
      
      contador <- contador + 1
      soma <- soma + idade

   fimEnquanto

    media <- (soma / valor)
    
    se (mulher2 = 1) entao
      se (mulherVinte <> 0) entao
         se (mulher <> 1) e (mulherVinte <> 1) entao
            escreval (mulher, " mulheres foram cadastradas.")
            escreval  (mulherVinte, " mulheres tem mais de 20 anos.")
         senao
            escreval (mulher, " mulher foi cadastrada." )
            escreval  (mulherVinte, " mulher tem mais de 20 anos.")
         fimSe
      senao
         escreval (mulher, " mulheres foram cadastradas.")
         escreval ("Nenhuma mulher tem mais de 20 anos.")
      fimse
    senao
         escreval ("Nenhuma mulher foi cadastrada.")
    fimSe
    
    se (homem2 = 2) entao
      se (homem <> 1) entao
         escreval (homem, " homens foram cadastrados.")
      senao
         escreval (homem, " homem foi cadastrado." )
      fimse
    senao
      escreval ("Nenhum homem foi cadastrado.")
    fimSe

    escreval ("A média da idade do grupo é: ",media)





Fimalgoritmo