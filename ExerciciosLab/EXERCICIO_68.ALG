algoritmo "exercicio_68"
var

   sexo: caractere
   pessoas, mulheres, pesoF, pesoM, maiorFem, maiorMas, homens, homensMais100: inteiro
   mediaF, mediaM, mediaFem, mediaMas: real

inicio


    Escreval("INDICADOR DE PESSOAS")
    Escreval("--------------------------")
    Escreval("DIGITE [F] PARA FEMININO.")
    Escreval("DIGITE [M] PARA MASCULINO.")

    Para pessoas de 1 ate 8 faca
         Escreva("QUAL SEU SEXO? ")
         Leia(sexo)
         
         
         se (sexo = "F") entao
            Escreva("QUAL SEU PESO?: ")
            Leia(pesoF)
            Escreval("")
            
            mulheres <- mulheres + 1
            mediaF <- mediaF + pesoF
            
            se (pesoF > maiorFem) entao
               maiorFem <- pesoF
            fimse
            
         fimse
         
         se (sexo = "M") entao
            Escreva("QUAL SEU PESO?: ")
            Leia(pesoM)
            Escreval("")
            
            homens <- homens + 1
            mediaM <- mediaM + pesoM
            
            se (pesoM > 100) entao
               homensMais100 <- homensMais100 + 1
            fimse
            
            se (pesoM > maiorMas) entao
               maiorMas <- pesoM
            fimse
         fimse
         
         fimpara
         
         mediaFem <- mediaF/mulheres
         mediaMas <- mediaM/homens
         
         Escreval("-------------------------------")
         Escreval(mulheres, " MULHERES FORAM CADASTRADAS.")
         Escreval(homens, " HOMENS FORAM CADASTRADAS.")
         Escreval(mediaFem:5:2, " É A MÉDIA DE PESO ENTRE AS MULHERES.")
         Escreval(mediaMas:5:2, " É A MÉDIA DE PESO ENTRE OS HOMENS.")
         Escreval(maiorFem, " FOI O MAIOR PESO ENTRE AS MULHERES.")
         Escreval(maiorMas, " FOI O MAIOR PESO ENTRE OS HOMENS.")
         Escreval(homensMais100, " HOMENS PESAM MAIS DE 100 KG.")

fimalgoritmo