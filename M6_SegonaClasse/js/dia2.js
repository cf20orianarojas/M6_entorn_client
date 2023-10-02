// funcions JS utilitzant esdeveniments i interpolació
function introdueixNombre() {
    let numero = prompt("Introdueix un número de l'1 al 10");
    while (numero < 1 || numero > 10) {
        console.error("Fora de rang");
        numero = prompt("Fora de rang, introduiex un número de l'1 al 10");
    }
    console.log(`Taula del ${numero}`);
    for (let n = 1; n <= 10; n++) {
        console.log(`${numero} x ${n} = ${numero*n}`);
    }
}

function fibonacci() { 
    let n = document.getElementById('numero').value;
    let a = 0, b = 1, nA = 1;
    console.log(`Seqüència de fibonacci del número ${n}`);
    console.log(`${b}`)
    for (let i = 1; i < n; i++) {
        nA = a + b;
        a = b;
        b = nA;
        console.log(`${nA}`);
    }
    /* Alternativa
    const fib = [0, 1]; // desar en un array els valor a i b
    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 2] + fib[i - 1]; // sumar 
        console.log(fib[i]);
    } */
}