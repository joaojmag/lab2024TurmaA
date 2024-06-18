algoritmo "semnome"
var
equilatero,isoceles,escaleno,triangulo:logico
retaum,retadois,retatres:real
inicio
Escreva("qual a medida da reta um?")
Leia(retaum)
Escreva("qual a medida da reta dois?")
Leia(retadois)
Escreva("qual a medida da reta tres?")
Leia(retatres)
triangulo <- (retaum <retadois+retatres)(retadois<retaum+retatres)(retatres<retaum+retadois)
equilatero<-(retaum=retadois)e(retadois=retatres)e(retatres=retaum)
isoceles<-(retaum=retadois)(retatres<>retaum)e(retadois=retatres)(retaum<>retadois)e(retaum=retatres)(retadois<>retatres)
escaleno<-(retaum<>retadois)e(retadois<>retatres)e(retaum<>retatres)
Se triangulo=falso entao
Escreva("isto não é um triangulo")
senao
se (triangulo=verdadeiro) e (equilatero=verdadeiro) entao
Escreva("seu triangulo é equilatero")
senao
se (triangulo=verdadeiro) e (isoceles=verdadeiro) entao
Escreva("o triangulo é isoceles")
senao triangulo=verdadeiro e escaleno=verdadeiro entao
Escreva("o triangulo é escaleno")

fimse
fimse
fimse





fimalgoritmo

