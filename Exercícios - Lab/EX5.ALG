Algoritmo "Ex5"

//5) Faça um programa que leia as duas notas de um aluno em uma matéria e mostre
//na tela a sua média na disciplina.

Var

   Media, Num1, Num2 : Real
   Materia : Caracter
   

Inicio

      Escreva("Deseja realizar a média de qual matéria? ")
      Leia(Materia)
      Escreva("Informe a 1ª Nota: ")
      Leia(Num1)
      Escreva("Informe a 2ª Nota: ")
      Leia(Num2)
      Media <- ( (Num1 + Num2) / 2)
      Escreval("A média entre:", Num1, " e", Num2, " na matéria de ", Materia, " é", Media)

Fimalgoritmo