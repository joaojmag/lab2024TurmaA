algoritmo "96"
var
nota1, nota2, media: real
resultado,m: real

Funcao media( n1,n2:real ):real


inicio
    resultado <- (n1 + n2) / 2
    retorne resultado



fimfuncao





inicio
    escreva("Digite a primeira nota do aluno:  ")
    leia(nota1)
    escreva("Digite a segunda nota do aluno:   ")
    leia(nota2)


    m <- media(nota1, nota2)
    
    
    
    escreval(" A média do aluno é : " , m )
fimalgoritmo
