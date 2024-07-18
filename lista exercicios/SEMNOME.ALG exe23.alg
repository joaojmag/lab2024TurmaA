Algoritmo "semnome"

Var

    nome,sexo:caracter
    valor,descontoF,descontoM,resultadoM,resultadoF:real

Inicio

       escreva("escreva seu nome")
       leia(nome)

       escreva("qual seu sexo")
       leia(sexo)

       escreva("qual o valor de suas compras")
       leia(valor)


        descontoF <-13 * valor / 100
           resultadoF <-valor - descontoF

        descontoM <-5 * valor / 100
         resultadoM <-valor - descontoM

       se sexo="f"entao
       
       escreval(resultadoF)
       Senao
       escreval(resultadoM)

       fimSe
       
Fimalgoritmo