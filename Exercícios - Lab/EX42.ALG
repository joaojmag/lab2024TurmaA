Algoritmo "Ex42"

//42) Faça um algoritmo que pergunte ao usuário um número inteiro e positivo
//qualquer e mostre uma contagem até esse valor:
//Ex: Digite um valor: 35
//Contagem: 1 2 3 4 5 6 7 ... 33 34 35 Acabou!

Var
   contador, valor : Inteiro

inicio

      EscrevaL (" _______________________________" )
      EscrevaL ("|                               |")
      EscrevaL ("| Contador até onde você quiser |")
      EscrevaL ("|_______________________________|")
      EscrevaL (" ")

      contador <- 0
      
      EscrevaL(" Deseja contar até quanto? ")
      Leia(valor)

      Enquanto (contador <= valor ) faca
               Escreva(contador, " ")
               contador <- contador + 1
      FimEnquanto

      EscrevaL("")
      EscrevaL( " Acabou!" )

fimalgoritmo