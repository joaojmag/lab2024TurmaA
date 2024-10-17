//relações do DOM {Parentes - pai e filho}
const caixa1 = document.querySelector("#caixa1")
const btn_c = [...document.querySelectorAll (".curso")]
const c1_2 = document.querySelector("#c1_2")

console.log(caixa1.hasChildNodes());
console.log(btn_c[0].hasChildNodes());
console.log(btn_c[0].childNodes)
console.log(c1_2.parentNode.parentNode);


if (btn_c[0].children.length > 0) {
    console.log("Possui filhos");
} else {
    console.log("Não possui filhos");
}


// Condição ternária (if de uma linha, para quando tem condições pequenas)
console.log(caixa1.children.length > 0 ? "Possui filhos" : "Não possui filhos");
