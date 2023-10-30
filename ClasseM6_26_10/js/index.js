/* Generar un nº entre [1-100] (Math.random()) i es tracta d'endevinar-lo
Cada intent es dirà "És major" ó "És menor" segons si l'intent sigui més
gran o més petit.
Si s'introdueix un valor invàlid es mostrarà "invàlid" i es comptarà l'intent. 
Si introdueix un 0 - "Game over", resultat - "L'has endevinat en 'n' intents" */
function endevinaNum() {
    let num = Math.floor(Math.random() * 100) + 1;
    let count = 0;
    let numero = -1;
    while (numero != num) {
        let numero2 = prompt("Endevina el número: ");
        count++;
        if(isNaN(numero2)) {
            console.log("Invàlid");
        } else {
            numero = parseInt(numero2);
            if (numero === 0) {
                console.log("Game over"); 
                break;
            }
            if (numero > num) {
                console.log("És menor");
            } else if (numero < num) {
                console.log("És major");
            } 
        }
    } 
    if (numero == num) {
        console.log(`L'has endivinat en ${count} intents`);
    }
}

/* Demanar 2 num de [2000 a 2050] dir quin és el primer any del rang comença en dimecres (día 1 de gener de l'any) 2003
    1 any = 365 d         1 semana = 7 d
    cada 4 any = 366 d    dateGener = new Date(any, 0, 1); // 1 de enero del any
    dataGaner.getDay(); // dia de la semana
*/
function primerMiercoles() {
    let n1 = parseInt(prompt("Introdueix un nombre entre [2000 - 2050]")); 
    let n2 = parseInt(prompt("Introdueix altre nombre entre [2000 - 2050]"));
    let enero;
    for(let i = n1; i <= n2; i++) {
        enero = new Date(i, 0, 1);
        let dia = enero.getDay();
        if(dia == 3) {
            console.log("El primer any que comença en dimecres és: ", enero.getFullYear());
        }
    }
}

/* Demanar una paraula i dir si és pentavocàlica (té les 5 vocals) */
function pentavocal() {
    let text = prompt("Escriu una paraula ");
    const paraules = text.split("");
    let count = 0;
    const vocals = /[aàáäeéèëiíìïoóòöuúùü]/gi ; 
    
    for(let i = 0; i < paraules.length; i++) {
        let coincidencia = paraules[i].match(vocals);
        if(coincidencia != null) {
            count++;
        }
    }
    if (count == 5) {
        console.log(`La paraula ${text} és pentavocàlica`);
    } else {
        console.log(`${text} no és pentavocàlica`);
    }
}