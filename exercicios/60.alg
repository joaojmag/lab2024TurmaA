algoritmo "60"
var
continuar,sexo,nome:caractere
entrarf:logico
idadef,idadem,menoridadef,maiorquetrinta,menorquedzt,f,m,qntd,somaidade,mediam,mediaf:inteiro
mediagrupo:real
inicio
Escreval("OLÁ USUARIO!")
Escreval("===============")

entrarf <- verdadeiro

continuar <- "S"

enquanto (continuar = "S") ou (continuar = "s") faca
   Escreval("qual seu sexo [M] ou [F]?")
   Leia(sexo)

   se (sexo = "F") ou (sexo = "f") entao
      Escreval("qual o seu nome?")
      Leia(nome)
      Escreval("qual a sua idade?")
      Leia(idadef)
      
      f <- f + 1
   se (idadef <= 18) entao
      menorquedzt <- menorquedzt + 1
   fimse

      senao
         se (sexo = "M") ou (sexo = "m") entao
            Escreval("qual o seu nome?")
            Leia(nome)
            Escreval("qual a sua idade?")
            Leia(idadem)
            m <- m + 1
         
   se (idadem >= 30) entao
      maiorquetrinta <- maiorquetrinta + 1
   fimse
      senao
         se (sexo <> "F") ou (sexo <> "f") ou (sexo <> "M") ou (sexo <> "m") entao
            Escreval("sintaxe errada! diga seu sexo novamente")
         fimse

         fimse

         fimse

   se entrarf entao
      menoridadef <- idadef
      entrarf <- falso
   fimse

   se (idadef < menoridadef) entao
      menoridadef <- idadef
   fimse

   Escreval("você quer continuar(S/N)?")
   Leia(continuar)
   
   somaidade <- idadef + idadem
   qntd <- f + m
   mediagrupo <- somaidade / qntd

fimenquanto

Escreval("a mulher com a menor idade é a:",nome)
Escreval("a média de idade do grupo é ",mediagrupo:3:2)
Escreval("há ",maiorquetrinta," homens com mais de 30 anos.")
Escreval("há ",menorquedzt," mulheres com menos de 18 anos.")

fimalgoritmo
