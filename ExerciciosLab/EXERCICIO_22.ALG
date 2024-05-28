algoritmo "exercicio_22"
var

   nascimento, idade: inteiro

inicio
      Escreval("BEM VINDO SOLDADO")
      Escreval("--------------------")
      Escreval("EM QUE ANO VOCÊ NASCEU?: ")
      Leia(nascimento)

      idade <- 2024-nascimento
      Escreval("--------------------")
      Escreval("VOCÊ TEM ", idade, " ANOS.")
      
      se idade>18 entao
         Escreval("JÁ SE PASSARAM ", idade-18, " ANOS DO ALISTAMENTO.")
         Escreval("VAMO CORRER ATRÁS E SERVIR NOSSO PAÍS.")
         Escreva("--------------------")
      senao
           se idade<18 entao
              Escreval("--------------------")
              Escreval("FALTA ", 18-idade, " ANOS PARA O ALISTAMENTO.")
              Escreval("AGUARDO VOCÊ QUANDO COMPLETAR SEUS 18 ANOS.")
              Escreva("---------------------")
                 senao
                 se idade=18 entao
                    Escreva("VAMOS SERVIR O NOSSO PAÍS!")
                 fimse
           fimse
      fimse

fimalgoritmo