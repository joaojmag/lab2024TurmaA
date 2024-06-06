algoritmo "semnome"
var
triangulo:logico
retaum,retadois,retatres:inteiro
inicio
Escreva("qualo primeiro segmento de reta:")
Leia(retaum)
Escreva("qual o segundo segmento de reta:")
Leia(retadois)
Escreva("qual o terceiro segmento de reta:")
Leia(retatres)
triangulo <- (retaum <retadois+retatres)(retadois<retaum+retatres)(retatres<retaum+retadois)
se (triangulo=verdadeiro) entao
Escreva("sim, é possivel formar um triangulo")
senao
Escreva("não é possivel formar um triangulo")
fimse

fimalgoritmo
