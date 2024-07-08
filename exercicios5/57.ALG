Algoritmo "57"

Var
salario,salarioHomem,salarioMulher: Real
sexo,continuar: Caractere

Inicio

salarioHomem <- 0
salarioMulher <- 0
continuar <- "S"

Enquanto continuar = "S" Faça
   Escreva("Digite o salário do funcionário: ")
   Leia(salario)

   Escreva("Digite o sexo do funcionário (M/F): ")
   Leia(sexo)

      Se sexo = "M" Então
         salarioHomem <- salarioHomem + salario
      Senão Se sexo = "F" Então
        salarioMulher <- salarioMulher + salario
      FimSe


   Escreva("Deseja continuar adicionando funcionários? (S/N): ")
   Leia(continuar)

      continuar <-(continuar)
      
FimEnquanto


Escreval()
Escreval("Total de salários pagos aos homens: R$ ",salarioHomem)
Escreval("Total de salários pagos às mulheres: R$ ",salarioMulher)

FimAlgoritmo

