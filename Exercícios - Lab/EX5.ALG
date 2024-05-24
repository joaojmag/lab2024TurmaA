Algoritmo "Ex5"

//5) Faça um programa que leia as duas notas de um aluno em uma matéria e mostre
//na tela a sua média na disciplina.

Var

   media, num1, num2 : Real
   materia : Caracter
   

Inicio

      Escreva("Deseja realizar a média de qual matéria? ")
      Leia(materia)
      Escreva("Informe a 1ª Nota: ")
      Leia(num1)
      Escreva("Informe a 2ª Nota: ")
      Leia(num2)
      media <- ( (num1 + num2) / 2)
      Escreval("A média entre:", num1, " e", num2, " na matéria de ", materia, " é", media)

Fimalgoritmo
