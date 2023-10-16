function creaTaula() {
    let fila = parseInt(prompt("Quantes files? "));
    let col = parseInt(prompt("Quantes columnes? "));

    let t = document.createElement("table");

    for(let files = 1; files <= fila; files++) {
        let tr = document.createElement("tr"); // filas

        for(let columnes = 1; columnes <= col; columnes++) {
            let td = document.createElement("td"); // columnas
            td.style.border = "1px solid black";
            
            let txt = document.createTextNode(`${files} . ${columnes}`); // contenido: n1 fila n1 columna

            tr.appendChild(td); // fila a columna
            td.appendChild(txt); // columna conté el text 
        }
        t.appendChild(tr); // taula a fila
    }
    // per afegir al body la taula
    document.body.appendChild(t);
}

function taulaMultiplicar() {
    let fila = parseInt(prompt("Files? "));
    let col = parseInt(prompt("Columnes? "));

    let taula = document.createElement("table");

    for(let i = 1; i <= fila; i++) {
        let tr = document.createElement("tr");
        for(let j = 1; j <= col; j++) {
            let td = document.createElement("td");
            td.style.border = "1px solid black";
            td.style.width = "20px";
            td.style.height = "20px";
            let text = document.createTextNode(i*j); // Imprimir la tabla de multiplicar (Arreglar) fila x columna

            tr.appendChild(td);
            td.appendChild(text);
        }
        taula.appendChild(tr);
    }
    document.body.appendChild(taula);
}


/*
Demanar el nº de columnes de la taula (igual nº de cel·les de color a la darrera fila)
i pinteu una piràmide nº files = (nº columnes/2) + 1;

Posible dos bucles for una piramide invertida para la mitad blanco y rojo 
y rojo invertido, blanco

file - 1 (els blancs)
*/
function piramide() {
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
        for(let j = 1; j <= i*2-1; j++) {
            let td = document.createElement("td");

            /* Estilos */
            td.style.width = "20px";
            td.style.height = "20px";
            td.style.backgroundColor = "red"
            tr.appendChild(td);
        } 

         /* segunda piramide de blancos */
         for(let k = 1; k <= nBlancos/2; k++) {
            let td = document.createElement("td");

            /* Estilos */
            td.style.width = "20px";
            td.style.height = "20px";
            td.style.backgroundColor = "white";
            tr.appendChild(td);
        }

        nRojos+=2; // incrementar los rojos por 2 
        t.appendChild(tr);
    }
    document.body.appendChild(t);
}