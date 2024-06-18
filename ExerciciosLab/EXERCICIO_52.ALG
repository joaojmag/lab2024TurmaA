algoritmo "exercicio_52"
var

   idade, menor, maior, cont, pessoasMaior, pessoasMenor: inteiro
   media, mediaFinal: real

inicio
      cont <- 1
      Repita
            Escreva("Qual a idade da", cont, " pessoa: ")
            Leia(idade)
            cont <- cont + 1

      se (idade > 18) entao
         pessoasMaior <- pessoasMaior + 1
           media <- media + idade
      senao
           se (idade < 5) entao
           pessoasMenor <- pessoasMenor + 1
           media <- media + idade
      fimse
      fimse
      
      se (idade > maior) entao
         maior <- idade
         menor <- maior
      senao
           se (idade < menor) entao
           menor <- idade
      fimse
      fimse
      
      ate (cont=11)
      
      mediaFinal <- media/10
      
      Escreval("")
      Escreval("A média de idade deles é ", mediaFinal:5:2)
      Escreval("A maior idade é", maior)
      Escreval("A menor idade é", menor)


fimalgoritmo