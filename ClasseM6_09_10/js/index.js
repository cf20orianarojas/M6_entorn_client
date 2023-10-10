function costTrucada() {
    let h = parseInt(prompt("Hores en trucada:  "));
    let m = parseInt(prompt("Minuts en trucada:  "));
    let s = parseInt(prompt("Segons en trucada:  "));

    let totalSegs = (h * 3600) + (m * 60) + s; // converteix a segons i sumar tot
    
    let segsAMin = totalSegs / 60; // convertir a minuts
    let resultat = segsAMin * 0.05; // calcular el resultado
    console.log(`Cost total ${resultat.toFixed(2)}€`);
}

function colorHexadecimal() {
    let r = parseInt(prompt("R número (0 - 255): "));
    let g = parseInt(prompt("G número (0 - 255): "));
    let b = parseInt(prompt("B número (0 - 255): "));

    let hexadecimal = aHexadecimal(r) + aHexadecimal(g) + aHexadecimal(b);
    console.log(`(${r},${g},${b}) = #${hexadecimal}`);
}

function aHexadecimal(n) {
    let hexa = n.toString(16);
    return hexa.length === 1 ? "0" + hexa : hexa;
}

function canviDiners() {
    let preu = parseInt(prompt("Preu: "));
    let calers = parseInt(prompt("Diners: "));

    let total = calers - preu;
    
    const diners = [500, 200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];
    const canvi = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    
    console.log("-------------------------------");
    console.log(`preu = ${preu}     calers = ${calers}`);
    
    for(let i = 0; i < diners.length; i++) {
        let billetsCanvi = canvi - diners[i];
        if(diners[i] <= preu) {
            billet = diners[i] - preu;

        }
        
        console.log(`de ${diners[i]}`);
    }
    console.log(canvi);
    console.log(`Total canvi ${total}`);
}