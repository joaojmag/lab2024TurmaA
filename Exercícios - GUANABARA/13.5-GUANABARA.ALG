Algoritmo "13.5-GUANABARA"

//Aula #13.5 Guanabara "Analisador de Nomes"

var
   cont : Inteiro
   nome : Caracter

//Procedimentos

Procedimento NavBar()
Inicio
      LimpaTela
      EscrevaL (" ________________________" )
      EscrevaL ("|                        |")
      EscrevaL ("|  Analisador de Nomes   |")
      EscrevaL ("|________________________|")
      EscrevaL (" ")

FimProcedimento

Inicio
      NavBar()
      Escreva("Digite seu nome: ")
      Leia(nome)
      EscrevaL(" O Total de Letras de Seu Nome é:", Compr(nome))
      EscrevaL(" Seu Nome em Maiúsculo é: ", Maiusc(nome))
      EscrevaL(" Seu Nome em Minúsculo é: ", Minusc(nome))
      EscrevaL(" A Primeira Letra do Seu Nome é: ", Copia(nome,1,1))
      EscrevaL(" A Última Letra do Seu nome é: ", Copia(Maiusc(nome),Compr(nome),1))
      EscrevaL(" Seu Nome Tem a Letra A na Posição:", Pos("A"), Maiusc(nome)))
      EscrevaL(" O Código da Letra A é:", Asc("A"))
      EscrevaL(" A Letra de Código 65 é:  ", Carac(65) )
      
      Para cont := Compr(nome) ate 1 passo 1 -1 faca
           Escreva(Copia(Maiusc(nome),cont,1)
      FimPara

fimalgoritmo