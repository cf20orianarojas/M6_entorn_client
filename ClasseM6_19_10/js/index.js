function rombo() {
    let col = parseInt(prompt("Columnes? "));
    let files = Math.floor(col / 2) + 1;

    let nRojos = 1;

    let t = document.createElement("table");

    for(let i = 1;  i <= files; i++) {
        // calcular los blancos
        let nBlancos = col - nRojos;

        let tr = document.createElement("tr");

        /* primera piramide de blancos */
        for (let blanc = 1; blanc <= nBlancos/2; blanc++) {
            let td = document.createElement("td");
            td.style.backgroundColor = "white";
            td.style.width = "20px";
            td.style.height = "20px";

            tr.appendChild(td);
        }

        /* piramides rojos */
        for(let j = 1; j <= nRojos; j++) {
            let td = document.createElement("td");
            /* Estilos */
            td.style.width = "20px";
            td.style.height = "20px";
            td.style.backgroundColor = "red"
            tr.appendChild(td);
        } 
        nRojos+=2; // incrementar los rojos por 2 
        
        t.appendChild(tr);
    }

    let rojos = files +1;
    for(let i = files-1; i >= 1; i--) {
        // calcular los blancos
        let nBlancos = col - rojos;

        let tr = document.createElement("tr");

        for (let blanc = nBlancos/2; blanc >= 1; blanc--) {
             let td = document.createElement("td");
             td.style.backgroundColor = "white";
             td.style.width = "20px";
             td.style.height = "20px";

             tr.appendChild(td);
        }

        /* piramides rojos */
        for(let j = 1; j <= rojos; j++) {
            let td = document.createElement("td");
            /* Estilos */
            td.style.width = "20px";
            td.style.height = "20px";
            td.style.backgroundColor = "red"
            tr.appendChild(td);
        }

        rojos-=2;
        t.appendChild(tr);
    }

    document.body.appendChild(t);
}

/* Demanar a l'usuari un nom d'arxiu i pintar per consola la seva extensió.  */
function extensio() {
    let arxiu = prompt("Nom de l'arxiu: ");
    let extensio = arxiu.split('.');
    console.log(`L'extensió del arxiu es .${extensio.pop()}`);
} 

/* Demanar a l'usuari una frase -> mostrar si la frase té el mateix número de "a" que de "b" */
function mateixNumAiB() {
    let frase = prompt("Introdueix una frase: ");
    let a = 0; let b = 0;
    for(let i = 0; i <= frase.length; i++) {
        if (frase[i] == 'a') a++;
        if (frase[i] == 'b') b++;
    }

    if (a === b) {
        console.log("Tenen el mateix número de 'a' i 'b'");
    } else {
        console.log(`No tenen el mateix número de lletres\na: ${a}\nb: ${b}`);
    }
}