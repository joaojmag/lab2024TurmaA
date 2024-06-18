Algoritmo "Ex53"

//53) Faça um programa que leia a idade e o sexo de 5 pessoas, mostrando no
//final: a) Quantos homens foram cadastrados
//b) Quantas mulheres foram cadastradas
//c) A média de idade do grupo
//d) A média de idade dos homens
//e) Quantas mulheres tem mais de 20 anos

Var
   idadeF, idadeM, idade, mulher, homem, mulherPlus20, cont : Inteiro
   mediaGrupo, mediaH, mediaM : Real
   sexo : Caracter

inicio

      EscrevaL (" _____________________________________" )
      EscrevaL ("|                                     |")
      EscrevaL ("| Idade e Sexo média de idade e afins |")
      EscrevaL ("|_____________________________________|")
      EscrevaL (" ")

      Repita
      
      EscrevaL("Qual o seu Gênero? ")
      Escreva("M para Masculino, F para Feminino: ")
      Leia(sexo)

      Se (sexo = "F") ou (sexo = "f") entao

          Escreva("Qual a sua idade? ")
          Leia(idadeF)
          
          Se ( idadeF > 20 ) entao
             mulherPlus20 <- mulherPlus20 + 1
          FimSe
          
          mulher <- mulher + 1
          cont <- cont + 1
          mediaM <- mediaM + idadeF

      Senao

           Se (sexo = "M") ou (sexo = "m") entao

               Escreva("Qual a sua idade? ")
               Leia(idadeM)

               homem <- homem + 1
               cont <- cont + 1
               mediaH <- mediaH + idadeM
               
      FimSe
      FimSe

      Ate( cont >= 5 )
      
      Se ( homem > 0 ) e ( mulher > 0 ) entao
      
          mediaGrupo <- ( ( mediaH + mediaM ) / (homem + mulher) )
          mediaH <- ( mediaH / homem )
          mediaM <- ( mediaM / mulher )

          EscrevaL("")
          EscrevaL (homem, " Homens foram cadastrados! ")
          EscrevaL (mulher, " Mulheres foram cadastradas! ")
          EscrevaL (mediaGrupo:3:0, " É a média da idade entre homens e mulheres. ")
          EscrevaL (mediaH:3:0, " É a média de idade dos homens. ")
          EscrevaL (mediaM:3:0, " É a média de idade das mulheres. ")
          EscrevaL (mulherPlus20, " Mulheres tem mais de 20 anos! ")

      Senao

      Se ( mulher > 0) entao
      
          mediaM <- ( mediaM / mulher )
      
          EscrevaL("")
          EscrevaL (homem, " Homens foram cadastrados! ")
          EscrevaL (mulher, " Mulheres foram cadastradas! ")
          EscrevaL (mediaM:3:0, " É a média de idade das mulheres. ")
          EscrevaL (mulherPlus20, " Mulheres tem mais de 20 anos! ")
      
      Senao

      Se ( homem > 0) entao

          mediaH <- ( mediaH / homem )

          EscrevaL("")
          EscrevaL (homem, " Homens foram cadastrados! ")
          EscrevaL (mulher, " Mulheres foram cadastradas! ")
          EscrevaL (mediaH:3:0, " É a média de idade dos homens. ")

      FimSe
      FimSe
      FimSe
      
fimalgoritmo