Algoritmo "Exer-53"

Var
contador, idade, genero: inteiro
mulher, homem, mulherVinte: inteiro
 media, soma: real
Inicio
   contador <- 1
   EscrevaL ("Vamos cadastrar algumas pessoas:")
   Enquanto (contador <= 5) faca
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
      contador <- contador + 1
      soma <- soma + idade
   fimEnquanto
    media <- (soma/5)
    
    se (genero = 1) entao
      escreval (mulher, " mulheres foram cadastradas.")
      escreval  (mulherVinte, " mulheres tem mais de 20 anos.")
      senao
         escreval ("Nenhuma mulher foi cadastrada.")
    fimSe
    
    se (genero = 2) entao
      escreval (homem, " homens foram cadastrados.")
      senao
         escreval ("Nenhum homem foi cadastrado.")
    fimSe

    escreval ("A média da idade do grupo é: ",media)

    
Fimalgoritmo
