Algoritmo "EX92"

//92) Crie uma lógica que leia um número inteiro e passe para um
//procedimento ParOuImpar() que vai verificar e mostrar na tela se o valor
//passado como parâmetro é PAR ou ÍMPAR.

var

//Procedimentos

Procedimento Break()
Inicio
      EscrevaL(" ")

FimProcedimento

Procedimento NavBar()
Inicio
      LimpaTela
      EscrevaL (" __________________________________________" )
      EscrevaL ("|                                          |")
      EscrevaL ("| Ao chamar o Procedimento ParOuImpar()... |")
      EscrevaL ("|__________________________________________|")
      Break()

FimProcedimento

Procedimento ParOuImpar(num : Inteiro)
Inicio

      Se ( num % 2 = 0 ) entao
         EscrevaL( num, " é PAR.")
      FimSe

      Se ( num % 2 <> 0 ) entao
         EscrevaL( num, " é ÍMPAR.")
      FimSe

      Break()

FimProcedimento

Inicio
      NavBar()

      ParOuImpar(10)
      ParOuImpar(9)

fimalgoritmo