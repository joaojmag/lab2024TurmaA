algoritmo "exercicio_53"
var

     sexo: caractere
     cont, idadeFem, idadeMas, mulherMais20, mulher, homem: inteiro
     mediaFem, mediaMas, mediaGrupo: real

inicio

      Repita

      Escreval("QUAL SEU GÊNERO")
      Escreval("[M] MASCULINO")
      Escreval("[F] FEMININO")
      Escreva(":")
      Leia(sexo)
      
      se (sexo = "F") ou (sexo = "f") entao
         Escreva("QUAL SUA IDADE: ")
         Leia(idadeFem)
      fimse
      
      se (idadeFem > 20) entao
         mulherMais20 <- mulherMais20 + 1
      
      mulher <- mulher + 1
      cont <- cont + 1
      mediaFem <- mediaFem + idadeFem
      
      senao
           se (sexo = "M") ou (sexo = "m") entao
           Escreva("QUAL SUA IDADE: ")
           Leia(idadeMas)
           
           homem <- homem + 1
           cont <- cont + 1
           mediaMas <- mediaMas + idadeMas
           
      fimse
      fimse
      
      ate (cont >= 5)
      
      se (homem > 0) e (mulher > 0) entao
      
         mediaGrupo <- ((mediaMas + mediaFem)/(homem + mulher))
         mediaMas <- (mediaMas/homem)
         mediaFem <- (mediaFem/mulher)
      
         Escreval("")
         Escreval(homem, " HOMENS EFETUARAM O CADASTRO! ")
         Escreval(mulher, " MULHERES EFETUARAM O CADASTRO! ")
         Escreval(mediaMas:3:0, " É A MÉDIA DE IDADE DOS HOMENS CADASTRADOS.")
         Escreval(mediaFem:3:0, " É A MÉDIA DE IDADE DAS MULHERES CADASTRADAS. ")
         Escreval(mulherMais20, " MULHERES POSSUEM MAIS DE 20 ANOS. ")
         Escreval(mediaGrupo:3:0, " É A MÉDIA DE IDADE ENTRE OS HOMENS E AS MULHERES CADASTRADOS. ")
      
      senao
      
      se (mulher > 0) entao
      
         mediaFem <- (mediaFem/mulher)
         
         Escreval("")
         Escreval(mulher, " MULHERES EFETUARAM O CADASTRO! ")
         Escreval(mediaFem, " É A MÉDIA DE IDADE DAS MULHERES CADASTRADAS. ")
         Escreval(mulherMais20, " MULHERES POSSUEM MAIS DE 20 ANOS. ")
         
      senao
           se (homem > 0) entao
           
           mediaMas <- (mediaMas/homem)
           
           Escreval("")
           Escreval(homem, " HOMENS EFETUARAM O CADASTRO! ")
           Escreval(mediaMas:3:0, " É A MÉDIA DE IDADE DOS HOMENS CADASTRADOS. ")
           
      fimse
      fimse
      fimse

      
      
      
      
      

fimalgoritmo