algoritmo "exercicio_23"
var
   nome, sexo: caractere
   compra: real

inicio
      Escreval("BEM VINDO À PRODUTOS DA CLEUZA")
      Escreval("----------------------")
      Escreval("NOSSA LOJA ESTÁ COM DESCONTOS EXCLUIVOS PARA O DIA DA MULHER")
      Escreval("----------------------")
      Escreva("QUAL É O SEU NOME: ")
      Leia(nome)
      Escreval("DIGITE M OU F PARA IDENTIFICARMOS SEU SEXO: ")
      Leia(sexo)
      Escreva("QUANTO DEU SUA COMPRA(R$): ")
      Leia(compra)
      Escreval("-----------------------")
      
      se (sexo = "F") ou (sexo = "f") entao
         Escreval("FELIZ DIA DA MULHER, ", nome, "!")
         Escreval("SUA COMPRA DEU R$", (compra-(compra*(5/100)) ))
      senao
      se (sexo = "M") ou (sexo = "m") entao
         Escreval("LEVE UM PRESENTE PARA A MULHER QUE TEM NA SUA VIDA, ", nome, "!")
         Escreval("SUA COMPRA DEU R$", (compra-(compra*(13/100)) ))
      fimse
      fimse
      Escreva("OBRIGADO POR COMPRAR COM A GENTE!")

fimalgoritmo