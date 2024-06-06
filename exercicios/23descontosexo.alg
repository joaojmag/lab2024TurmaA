var
valor,descontom,descontof:real
sexo,nome:caractere
inicio
Escreva("Qual seu nome?:")
Leia(nome)
Escreva("Qual seu sexo? escreva(m) ou (f):")
Leia(sexo)
Escreva("Escreva seu valor:")
Leia(valor)
descontom<-valor*5/100
descontof<-valor*13/100
se sexo="f" entao
Escreva("seu desconto é de",valor-descontof)
senao
Escreva("seu desconto é de",valor-descontom)
fimse



fimalgoritmo
