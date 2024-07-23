algoritmo "semnome"
var
nota1, nota2, media:real
situacao:caractere

funcao calcularmedia(n1,n2:real):real
   inicio
      retorne (n1 + n2) / 2
fimfuncao

funcao situacao(m:real):caractere
   inicio
      se (m >= 7) entao
         retorne "APROVADO"
      senao
         se (m >= 4) entao
            retorne "RECUPERAÇÃO"
         senao
            retorne "REPROVADO"
      fimse
         fimse
fimfuncao

inicio
   Escreval("Digite a primeira nota do aluno: ")
   Leia(nota1)
   Escreval("Digite a segunda nota do aluno: ")
   Leia(nota2)

   media <- calcularmedia(nota1,nota2)
   situacao <- situacao(media)

   Escreval("A média do aluno é: ",media)
   Escreval("Situação do aluno: ",situacao(media))
fimalgoritmo

