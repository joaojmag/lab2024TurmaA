Algoritmo "Ex28"


//28) Faça um programa que leia a largura e o comprimento de um terreno
//retangular, calculando e mostrando a sua área em m². O programa também
//devemostrar a classificação desse terreno, de acordo com a lista
//abaixo: - Abaixo de 100m² = TERRENO POPULAR
//- Entre 100m² e 500m² = TERRENO MASTER
//- Acima de 500m² = TERRENO VIP

var

   largura, comprimento, terreno : Real

inicio

      EscrevaL (" ______________________________________________" )
      EscrevaL ("|                                              |")
      EscrevaL ("| Descubra o status de seu terreno Retangular! |")
      EscrevaL ("|______________________________________________|")
      EscrevaL (" ")

      Escreva("Digite a largura de seu terreno (m): ")
      Leia(largura)

      Escreva("Digite o comprimento de seu terreno (m): ")
      Leia(comprimento)

      terreno <- ( largura * comprimento )

      Se (terreno < 100) entao

         EscrevaL("Seu terreno tem:", terreno, "m², seu terreno é TERRENO POPULAR.")
      Senao
         Se (terreno >= 100 ) e (terreno <= 500 )entao

            EscrevaL("Seu terreno tem:", terreno, "m², seu terreno é TERRENO MASTER.")
         Senao

            EscrevaL("Seu terreno tem:", terreno, "m², seu terreno é TERRENO VIP!")
         FimSe
      FimSe



fimalgoritmo