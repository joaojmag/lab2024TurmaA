Algoritmo "07.4-GUANABARA"

//Aula #07.4 Guanabara "Está Apto a Dirigir?"

var

   anoAtual, anoNasc, idade: Inteiro

inicio
      Escreval("DEPARTAMENTO DE TÂNSITO:")
      EscrevaL("")
      
      Escreva("Digite o ano Atual (YYYY): ")
      Leia(anoAtual)
      EscrevaL("")
      
      Escreva("Digite o Ano de Nascimento (YYYY): ")
      Leia(anoNasc)
      EscrevaL("")

      idade <-  anoAtual - anoNasc
      Se ( idade  >= 18 ) entao
         EscrevaL("----------STATUS-----------")
         EscrevaL("IDADE:", idade)
         EscrevaL("Apto a tirar a Carteira")
         EscrevaL("---------------------------")
      Senao
         EscrevaL("----------STATUS-----------")
         EscrevaL("IDADE:", idade)
         EscrevaL("Inapto a tirar a Carteira")
         EscrevaL("---------------------------")
      FimSe
      
fimalgoritmo