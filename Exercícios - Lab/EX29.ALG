Algoritmo "Ex29"


//29) Desenvolva um programa que leia o nome de um funcionário, seu salário,
//quantos anos ele trabalha na empresa e mostre seu novo salário, reajustado de
//acordo com a tabela a seguir:
//- Até 3 anos de empresa: aumento de 3%
//- entre 3 e 10 anos: aumento de 12.5%
//- 10 anos ou mais: aumento de 20%

var

   funcionario : Caracter
   sal, nsal: real
   anos: inteiro

inicio

      EscrevaL (" _____________________________" )
      EscrevaL ("|                             |")
      EscrevaL ("| Veja se seu aumento chegou! |")
      EscrevaL ("|_____________________________|")
      EscrevaL (" ")
      
      Escreva(" Funcionário, informe seu nome: ")
      Leia(funcionario)
      
      Escreva(funcionario, ", informe o seu salário R$: ")
      Leia(sal)

      EscrevaL (" ")
      EscrevaL ( funcionario, ", Trabalha na empresa a quantos anos? ")
      EscrevaL (" [1] 1 a 3 Anos. ")
      EscrevaL (" [2] 3 a 10 Anos. ")
      EscrevaL (" [3] +10 Anos. ")
      Leia(anos)

      Escolha anos

              Caso 1
                   nsal <- (sal *1.03)

              Caso 2
                   nsal <- (sal *1.125)

              Caso 3
                   nsal <- (sal *1.20)
                   
              OutroCaso
                   EscrevaL("Dígito inválido!")
      FimEscolha

      Se (anos = 1 ) entao

        EscrevaL (" _______________________")
        EscrevaL ("                        ")
        EscrevaL (" Obrigado pelos seus anos de trabalho aqui na empresa!")
        EscrevaL (" Por seu trabalho árduo você receberá um aumento, segue abaixo seu salário já reajustado: ")
        EscrevaL (" ", funcionario, "! seu novo salário é de R$",nsal:6:2,".")
        EscrevaL ("________________________")
      Senao
      Se ( anos = 2 ) entao

        EscrevaL (" _______________________")
        EscrevaL ("                        ")
        EscrevaL (" Obrigado pelos seus anos de trabalho aqui na empresa!")
        EscrevaL (" Por seu trabalho árduo você receberá um aumento, segue abaixo seu salário já reajustado: ")
        EscrevaL (" ", funcionario, "! seu novo salário é de R$",nsal:6:2,".")
        EscrevaL ("________________________")
      Senao
      Se ( anos = 3 ) entao
      
        EscrevaL (" _______________________")
        EscrevaL ("                        ")
        EscrevaL (" Obrigado pelos seus anos de trabalho aqui na empresa!")
        EscrevaL (" Por seu trabalho árduo você receberá um aumento, segue abaixo seu salário já reajustado: ")
        EscrevaL (" ", funcionario, "! seu novo salário é de R$",nsal:6:2,".")
        EscrevaL ("________________________")
      
      FimSe
      FimSe
      FimSe

fimalgoritmo