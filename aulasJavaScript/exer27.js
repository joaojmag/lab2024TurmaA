//Função geradora
function* flor() {
    yield 'rosa'
    yield 'tulipa'
    yield 'orquidea'
}
const itc = flor()
console.log(itc.next().value);
console.log(itc.next().value);
console.log(itc.next().value);