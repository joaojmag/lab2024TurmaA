algoritmo "ATIVIDADE 22"
var

ano:inteiro
ano_atual:inteiro
idade:inteiro
t:inteiro
tempoqf:inteiro
inicio

Escreva("Digite o ano atual")

Leia(ano_atual)

Escreva("Digite o ano em que voce naceu")

Leia(ano)

idade<-ano_atual-ano
t<-idade-18

tempoqf <-18-idade
Escreval("idade",idade)
Se(idade<18) entao
Escreval("Ainda faltam",tempoqf,"anos")
Fimse

Se(idade >18)entao

Escreva("Ja se passaram",t,"anos")

Fimse
fimalgoritmo