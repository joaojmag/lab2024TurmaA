algoritmo "59"
var
continuar,sexo:caractere
idade,cnt,masculino,feminino,menoridadef,maioridade,somamasculina:inteiro
entrar,entrarf:logico
mediamasculina:real

inicio
Escreval("OLÁ USUARIO!")
Escreval("===============")

masculino <- 0
continuar <- "S"
feminino <- -0
entrar <- verdadeiro
entrarf <- verdadeiro
somamasculina <- 0

enquanto (continuar = "S") ou (continuar = "s") faca
   Escreval("qual seu sexo [M] ou [F]?")
   Leia(sexo)
   Escreva("qual sua idade?")
   Leia(idade)

   Escreval("você deseja continuar[S] ou [N]?")
   Leia(continuar)

   se entrar entao
      maioridade <- idade
      entrar <- falso
   fimse

   se (idade > maioridade) entao
      maioridade <- idade
   fimse





   se (sexo = "M") ou (sexo = "m") entao
       masculino <- masculino + 1
       
       somamasculina <- somamasculina + idade

       
       
       
   fimse

   se (sexo = "F") ou (sexo = "f") entao
      feminino <- feminino + 1
      se entrarf entao
         menoridadef <- idade
         entrarf <- falso
      fimse
   
      se (idade < menoridadef) entao
         menoridadef <- idade
      fimse
   
   fimse

fimenquanto
   se masculino > 0 entao
       mediamasculina <- somamasculina / masculino
      senao
         mediamasculina <- 0

   fimse

Escreval("a maior idade é ",maioridade)
Escreval("ao todo há ",masculino, " homens")
Escreval("a menor idade feminina é ",menoridadef)
Escreval("a média da idade masculina é ",mediamasculina)


fimalgoritmo

