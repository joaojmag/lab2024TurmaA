let n = 1
let max = 100

while (n <= max) {
    console.log('num ', n);
    n++

    if (n === 50) {
        break
    }

    if (n % 2 != 0) {
        console.log("fora");
        continue
    }

    console.log('dentro');
};

console.log("Acabou");

