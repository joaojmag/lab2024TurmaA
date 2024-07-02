Algoritmo "Ex69"

//69) [DESAFIO] Desenvolva um programa que leia o primeiro termo e a razão de uma
//PA (Progressão Aritmética), mostrando na tela os 10 primeiros elementos da PA e
//a soma entre todos os valores da sequência.

Var
   termo, razao, resul: inteiro

//Procedimentos

Procedimento NavBar()
Inicio
      LimpaTela
      EscrevaL (" __________________________" )
      EscrevaL ("|                          |")
      EscrevaL ("|   Progressão Aritmética  |")
      EscrevaL ("|__________________________|")
      EscrevaL (" ")

FimProcedimento

Inicio
      NavBar()

      Escreva("Digite o Termo o Primeiro termo: ")
      Leia(termo)
      
      Escreva("Digite a Razão da Progressão: ")
      Leia(razao)

      Escreva(termo)

      Para resul de 1 ate 10 faca
      
           termo <- termo + razao
           Escreva(termo)
      fimpara

fimalgoritmo
