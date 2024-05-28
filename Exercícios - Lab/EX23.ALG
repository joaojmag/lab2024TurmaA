Algoritmo "Ex23"

//23) Numa promoção exclusiva para o Dia da Mulher, uma loja quer dar descontos
//para todos, mas especialmente para mulheres. Faça um programa que leia nome,
//sexo e o valor das compras do cliente e calcule o preço com desconto. Sabendo
//que:
//- Homens ganham 5% de desconto
//- Mulheres ganham 13% de desconto

Var

   precoProduto : real
   nome, sexo :caracter

inicio

      EscrevaL("Qual o seu Nome? ")
      Leia(nome)
      EscrevaL("Qual o seu Sexo? ")
      EscrevaL("M para Masculino, F para Feminino")
      Leia(sexo)
      EscrevaL("Qual o valor de sua compra?")
      Leia(precoProduto)


      //Possibilidade por If Else
      Se (sexo = "F") ou (sexo = "f") entao
         EscrevaL("Feliz Dia da Mulher, ", nome, "!")
         EscrevaL("Você pagará apenas: R$", (precoProduto - (precoProduto*0.13) ) )
      Senao
      Se (sexo = "M") ou (sexo = "m") entao
         EscrevaL("Olá! ", nome, ", Devido a promoção dia das Mulheres," )
         EscrevaL("Você pagará apenas: R$", precoProduto - (precoProduto*0.05) )
      FimSe
      FimSe

fimalgoritmo