algoritmo "semnome"
var
mediahomem,cnt,idade,feminino,masculino,idadef,idadem,femininovinte:inteiro
sexo:caractere
mediamulher,mediagrupo:real
inicio
Escreval("BEM VINDO AO LEITOR!")
Escreval("====================")





cnt <- 1

idadef <- 20

enquanto (cnt <= 7) faca
   Escreva("diga o sexo da ",cnt,"a pessoa (F) ou (M):")
   Leia(sexo)
   Escreva("diga a idade da ",cnt,"a pessoa:")
   Leia(idade)


   cnt <- cnt + 1

se ("F" = sexo) entao
   mediamulher <- idade + mediamulher
   feminino <- feminino + 1
   se (idade > idadef) entao
      femininovinte <- femininovinte + 1

   fimse



fimse



se("M" = sexo) entao
   masculino <- masculino + 1
   mediahomem <- idade + mediahomem
fimse




fimenquanto

mediagrupo <- mediahomem + mediamulher
mediagrupo <-mediagrupo/7

Escreval("a média de idade do grupo é ",mediagrupo:3:2)
Escreval("há ",feminino, " mulheres cadastradas")
Escreval("há ",femininovinte," mulheres com mais de 20 anos!")
Escreval("há ",masculino, " homens cadastrados")
Escreva("a média de idade dos homens é ",mediahomem/masculino:3:2)

fimalgoritmo
