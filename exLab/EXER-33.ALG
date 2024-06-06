Algoritmo "Exer-33"

Var
 casa, salario, anos, prestacaoMensal: real

Inicio

  Escreval ("Seu empréstimo bancário pode ser aprovado?")
  Escreval  (" ")
  Escreva  ("Qual valor da casa? ")
  leia (casa)
  Escreva  ("Qual seu salário? ")
  leia (salario)
  Escreva  ("Em quantos anos pretende pagar a casa? ")
  leia (anos)
  Escreval  (" ")
  prestacaoMensal<-anos*12
  
  
  se (prestacaoMensal<(salario*0.3)) entao
     escreval ("Seu empréstimo foi APROVADO.")
     escreva  ("Parabéns!")

  senao
       escreval ("Seu emprétimo foi REPROVADO.")
       escreva  ("A prestação excede 30% do seu salário")
  fimSe
  
  
Fimalgoritmo