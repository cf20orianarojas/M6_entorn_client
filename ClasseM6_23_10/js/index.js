/* Demanar 2 frases a l'usuari i comprovar si tenen la mateixa longitud */
function longitudFrase() {
    let frase1 = prompt("Introdueix una frase: ");
    let frase2 = prompt("Introdueix altre frase: ");
    let iguals = frase1.length === frase2.length ? "Tenen la mateixa longitud" : "No tenen la mateixa longitud";
    console.log(iguals);
}

/* Demanar un text i una lletra, dir si la lletra està continguda entre 2 i 4 vegades en el text */
function lletraEnText() {
    const text = prompt("Un Text: ");
    const lletra = prompt("Una lletra: ");
    let count = 0;
    for(let i = 0; i < text.length; i++) {
        if (text[i] == lletra) count++;
    }
    if (count >= 2 && count <= 4 ) {
        console.log(`La lletra '${lletra}' està ${count} vegadas en el text`);
    } else {
        console.log(`La lletra '${lletra}' surt del rang, no es repeteix 2 o 4 vegades`);
    }
}

/* Demanar un text a l'usuari i un número, mostrar el text sense el caràcter en la posició del número. */
function remplaçaLletra() {
    let text = prompt("Introdueix un text: ");
    let n = parseInt(prompt("Introdueix un número: "));
    let result = "";
    // let result = text.replace(text[n], '_'); 
    for(let i = 0; i < text.length; i++) {
        if (i !== n) {
            result = result + text[i];
        }
    }
    console.log(result);
    document.write(result);
}

/* Demanar un text a l'usuari i mostrar: Ex: "Un text"  
1- Majúscules: ${textEnMajuscules} <br>
2- Minúscules: ${textEnMinuscules} <br>
3- Longitud:  <br>
4- Nombre de paraules: ... replaceAll('/s')
5- Les vocals són: 

expressió regular: 
vocals = /[aàeéèiíïoóòuúü]/gi
text.match(vocals);
text.match(vocals).length; 

6- El número de vocals és:
7- El text reduÏnt: // slice (i, text.length)
    Un text
    n text
    text
    text
    ext
    xt
    t
*/
function metodesString() {
    let text = prompt("Introdueix un text: ");

    document.write("Majúscules: ", text.toUpperCase(), "<br>");
    document.write("Minúscules: ", text.toLowerCase(), "<br>");
    document.write("Longitud: ", text.length, "<br>");

    vocals = /[aàeéèiíïoóòuúü]/gi;
    document.write("Les vocals són: ", text.match(vocals), "<br>");
    document.write("El número de vocals és", text.match(vocals).length , "<br>");
    document.write("El text reduïnt");
    for(let i = 0; i < text.length; i++) {
        document.write(text.slice(i, text.length), "<br>");
    }
}

/*  Demanar una hora a l'usuari en format hh:mm. És el dia de cap d'any i volem saber quants minuts 
    queden per a mitjanit 00:00. Si introdueix 00:00 -> "Any nou",
        exemple si fica: 
        23:45 -> 15
        21:30 -> 150 
        00:01 -> 1439  */
function calculaAnyNou() {
    let horaFormat = prompt("Introdueix una hora en format hh:mm ");
    let hores = horaFormat.split(':');
    let h = parseInt(hores[0]);
    let m = parseInt(hores[1]); 
    console.log(h, h + 1);
}