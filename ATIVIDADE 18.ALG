 algoritmo "ATIVIDADE 18"

var

idade:real

ano:real

ano_atual:real

soma:real

inicio

   Escreva("qual ano voce nasceu?: ")

   Leia(ano)

   Escreva("em que ano nós estamos?: ")

   Leia(ano_atual)

   idade <-ano_atual - ano

   Escreva(idade," anos ")

   Se(idade>= 16 ) e (idade<=18)entao

      Escreval("É  opicional  votar")

   Fimse

   Se(idade>18)e (idade<= 69)entao

      Escreval("É  obrigatorio  votar")

   Fimse

   Se(idade>=70)entao

      Escreva("Não é obrigatorio votar")

     Fimse

   Se(idade<16)entao

   Escreva("Não pode votar")

   Fimse

fimalgoritmo