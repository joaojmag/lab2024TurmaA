Algoritmo "Ex27"


//27) Crie um programa que leia duas notas de um aluno e calcule a sua média,
//mostrando uma mensagem no final, de acordo com a média atingida: - Média
//até 4.9: REPROVADO
//- Média entre 5.0 e 6.9: RECUPERAÇÃO
//- Média 7.0 ou superior: APROVADO

var

   nota1, nota2, media : Real

inicio

      EscrevaL (" _________________________________________" )
      EscrevaL ("|                                         |")
      EscrevaL ("| Descubra se está de Recuperação ou Não! |")
      EscrevaL ("|_________________________________________|")
      EscrevaL (" ")

      Escreva("Digite a Primeira Nota: ")
      Leia(nota1)

      Escreva("Digite a Segunda Nota: ")
      Leia(nota2)

      media <- ( ( nota1 + nota2 ) / 2 )
      EscrevaL("A média deste aluno é:", media:4:1)

      Se (media >=7) entao

         EscrevaL("Parabéns Aluno, você foi APROVADO! ")
      Senao
         Se (media >= 5 ) e (media < 7 )entao

            EscrevaL("Que pena aluno, você está de RECUPERAÇÃO.")
         Senao

            EscrevaL("Estude mais caro aluno, pois, você está REPROVADO!")
         FimSe
      FimSe



fimalgoritmo