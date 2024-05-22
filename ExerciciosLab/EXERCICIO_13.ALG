algoritmo "exercicio_12"
var
   nome, enter: Caractere
   salario, aumento, novo_salario: Real
inicio
      Escreva("Nome do funcionario: ")
      Leia(nome)
      Escreva("Informe seu salário: ")
      Leia(salario)
      Escreval("Seu salário atual é ", salario,".")
      Escreval("Parabens, ", nome, "!")
      Escreval("Seu salário sofrerá um balanço de aumento de 15%.")
      Escreval("Pressione ENTER para continuar")
      Leia(enter)
      aumento <- salario * (15/100)
      novo_salario <- salario+aumento
      Escreva("Seu novo salário é ", novo_salario, "!")
fimalgoritmo