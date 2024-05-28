Algoritmo "Ex19"

//19) Crie um algoritmo que leia o nome e as duas notas de um aluno, calcule a sua
//média e mostre na tela. No final, analise a média e mostre se o aluno teve ou
//não um bom aproveitamento (se ficou acima da média 7.0).

Var

    nota1, nota2, media: Real
    nome: Caracter

inicio

      Escreva("Qual o seu nome? ")
      Leia(nome)

      Escreva("Qual a nota da primeira prova? ")
      Leia(nota1)
      Escreva("Qual a nota da segunda prova? ")
      Leia(nota2)

      media <- ( ( nota1 + nota2 ) /2 )

      Se (media >= 7) entao
         EscrevaL("Parabéns ", nome, " essa foi por pouco, mas você passou! sua média é", media)
      senao
         Escreva(nome, " sua média insuficiente, você ficou de recuperação, sua média é:", media)
      FimSe

fimalgoritmo