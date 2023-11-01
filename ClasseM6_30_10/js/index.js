/* Obtenir la data actual del sistema i mostrar <>
1. Avui és dd (30) del mes mm (10) de l'any yyyyy (2023)
2. El nombre de setmana actual de l'any (44) dias / por 1000 * 24  o 7 (semanas?)
3. % de dies transcorreguts de l'any és nn,nn% (83.56%)
4. % de dies que queden en l'any nn,nn% (17'05%)
5. Ara són les hh:mm:ss (18:14:30)
6. % del dia transcorregut nn,nn% (76'01%) // 1d = 1440min
7. % de dia que queda nn,nn% (23'99%) 
crear 2 objetos Date(), 
obtener los milisegundos 
calcular los milisegundos a días.
formula porcentatge: n / total * 100;*/
function dataActual() {
    // Data de avui
    let data = new Date();
    document.write("<h3>Avui és " + data.getDate() + " del mes " + (data.getMonth()+1) + " de l'any " + data.getFullYear() + "</h3><br>");
    
    // Número de setmanas
    let inici = new Date(2023, 0, 1);
    let msAny = data.getTime() - inici.getTime(); // milisegons entre la data actual i el 1/1/2023
    let dies = Math.floor(msAny/(1000*60*60*24)) + 1; // calcula los dias desde los milisegundos ms * s * m * h / msAny 
    document.write("El nombre de setmana actual de l'any és " + (Math.floor((dies)/7)+1) + "<br>");
    
    // Percentatge de dies transcorreguts
    let transcorregut = (dies / 365) * 100; 
    document.write("El % de dies transcorreguts de l'any és " + transcorregut.toFixed(2) + "%" + "<br>"); 
    
    // Percentatge de dies restants
    let restants = (365 - dies) / 365 * 100;
    document.write("El % de dies que queden en l'any " + restants.toFixed(2) + "%" + "<br>");
    
    document.write("Ara són les " + data.getHours() + ":" + data.getMinutes() + ":" + data.getSeconds()+ "<br>");
    
    // Percentatge del dia transcorregut 
    let minutsDia = (data.getHours() * 60) + data.getMinutes();  // minuts totals del dia
    let minutsTranscorreguts = (minutsDia / 1440) * 100;
    document.write("El % del dia de avui transcorregut " + minutsTranscorreguts.toFixed(2) + "%" + "<br>");
    
    // Percentatge del que queda de dia
    let minutsRestants = (1440 - minutsDia) / 1440 * 100;
    document.write("El %  de dia que queda " + minutsRestants.toFixed(2) + "%" + "<br>");
}

/* Els codis de barres poden ser de 8 dígits o 13 dígits, el dígit més a la dreta és el de control i es calcula segons
 una fórmula: 2593856[2] -> (dígit control). Per calcular: començant per la dreta i sense incloute el dígit de control,
 les posiciones (imparells es *3) i (parells *1) i es suma 2*3+5*1+9*3+3*1+8*3+5*1+6*3=88 la diferència fins el proper
 multiplo de 10, és el dígit de control (2) con el resultado de la suma se busca la diferecia 
 addLeftZeroPadding(code, max); e3
 checkXdigitControl(codi);  25938562
 hacer una function que verifique ejemplo de función que sirve para calcular suma el valor de los pares y 
 los impares que se multiplican por 3 o por 1 ( con modulo % ) 

 output:

 65839522 -> correcto    |  5029365779425 -> correcto
 65839521 -> incorrecto  |  5129365779426 -> incorrecto 
 */
function codiBarres() {
    const codi = prompt("Introdueix el codi de barres ");
    checkXdigitControl(codi);
}

function checkXdigitControl(codi) {
    let suma = 0;
    for(let i = codi.length - 1; i >= 0; i--) {
        const num = parseInt(codi[i], 10);

        if(digit % 2 == 0) {

        }
    }
}