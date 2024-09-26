algoritmo "Ex54"
var

   cont, peso, altura, alturaDoGrupo, pesoMaior90, pesoMenor50, pesoG, alturaG, pessoasMenor, pessoasG, pessoasComP: real


inicio

            Escreval("APLICATIVO DE MEDIDAS.")
            Escreval("-----------------------")
      Repita
            Escreval("QUAL O SEU PESO? ")
            Leia(peso)
            Escreval("QUAL SUA ALTURA? ")
            Leia(altura)
            Escreval("")

            alturaDoGrupo <- altura + alturaDoGrupo

            cont <- cont + 1

            se (peso >= 90) entao
               pesoMaior90 <- peso + 1
               pessoasComP <- pessoasComP + 1
            fimse

            se (peso <= 50) e (altura <= 1.60) entao
               pesoMenor50 <- peso + 1
               pessoasMenor <- pessoasMenor + 1
            fimse

            se (peso >= 100) e (altura >= 1.90) entao
               pesoG <- peso + 1
               alturaG <- altura + 1
               pessoasG <- pessoasG + 1
            fimse

            ate (cont=7)

            alturaDoGrupo <- alturaDoGrupo/(cont -1)

            Escreval("A MÉDIA DE PESO ENTRE AS PESSOAS É, ", alturaDoGrupo:5:2)
            Escreval(pessoasComP, " PESSOAS PESAM MAIS DE 90KG.")
            Escreval(pessoasMenor, " PESSOAS PESAM MENOS DE 50KG E MEDEM MENOS DE 1.60.")
            Escreval(pessoasG, " PESSOAS PESAM MAIS DE 100 KG E MEDEM MAIS DE 1.90.")

fimalgoritmo