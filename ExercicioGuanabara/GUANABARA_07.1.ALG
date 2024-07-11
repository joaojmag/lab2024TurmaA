Algoritmo "GUANABARA_07.1"


var

   anoAtual, anoNasc, idade: Inteiro

inicio

      Escreva("Em que ano nós estamos? ")
      Leia(anoAtual)

      Escreva("Em que ano eu nasci?! ")
      Leia(anoNasc)

      idade <- ( anoAtual - anoNasc )
      Escreval ("Minha idade é", idade)

      Se (idade >= 18) entao
         EscrevaL("Você já é maior de Idade")
      senao
         Escreva("Você Ainda é menor de idade")
      FimSe

fimalgoritmo