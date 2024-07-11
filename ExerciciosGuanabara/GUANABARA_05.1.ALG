algoritmo "guanabara_05.1"
var

   ano, idade, nascimento: inteiro

inicio

      Escreva("Em que ano estamos?: ")
      Leia(ano)
      Escreva("Em que ano você nasceu?: ")
      Leia(nascimento)
      
      idade <- ano - nascimento
      
      Escreval("Em ", ano, " voce terá ", idade, " anos.")
      
      se (idade>= 21) entao
         Escreva("e já será maior de idade")
      fimse
      
fimalgoritmo