function conversioTemperatura() {
    let tipo = prompt("Vols la temperatura en C ó F?").toLowerCase();
    let temp = parseInt(prompt("Temperatura: "));

    if (tipo === 'c') {
        let c = (temp - 32) / (9 / 5);
            console.log(Math.floor(c));
    } else if (tipo === 'f') {
        let f = (9 / 5) * temp + 32;
            console.log(Math.floor(f)); // corregir esto
    }
}

function convertirNumeros() {
    let n = parseInt(prompt("Introduce un número: "));
    let n2 = passaABinari(n, 2);
    let n8 = passaAOctal(n, 8);
    let n16 = passaAHexadecimal(n, 16);

    console.log(`num=${n}, n2=${n2}, n8=${n8}, n16=${n16}`);
}

function passaABinari(n, base2) {
    let binari = "";
    while (n > 0) {
       let residu = n % base2; 
       n = Math.floor(n/base2);
       binari = residu + binari;
    }
    return binari;
}

function passaAOctal(n, base8) {
    let octal = "";
    while (n > 0) {
       let residu = n % base8; 
       n = Math.floor(n/base8);
       octal = residu + octal;
    }
    return octal;
}

function passaAHexadecimal(n, base16) {
    let hexadecimal = "";
    while (n > 0) {
       let residu = n % base16; 
       n = Math.floor(n/base16);
       hexadecimal = residu + hexadecimal;
    }
    return hexadecimal;
}