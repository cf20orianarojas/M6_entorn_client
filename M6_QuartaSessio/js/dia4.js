function mesProper() {
    let n1 = parseInt(prompt("Introdueix un número:"));
    let n2 = parseInt(prompt("Introdueix altre número:"));
    let diferencia1 = 100 - Math.abs(n1);
    let diferencia2 = 100 - Math.abs(n2); 

    if (diferencia1 < diferencia2) {
        console.log("El més proper és: ", n1);
    } else if (diferencia1 > diferencia2) {
        console.log("El més proper és: ", n2);
    } else {
        console.log("Son iguals");
    }
}

function dataHora() {
    let hora = new Date();
    let h = parseInt(prompt("Hora: "));
    let m = parseInt(prompt("Minuts: "));
    let s = parseInt(prompt("Segons: "));

    hora.setHours(h,m,s);
    hora.setSeconds(hora.getSeconds() + 1); // suma 
    console.log("Hora ", hora.getHours(), ":", hora.getMinutes(), ":", hora.getSeconds());
}

function dataValida() {
    let y = parseInt(prompt("Any: "));
    let m = parseInt(prompt("Mes: "));
    let d = parseInt(prompt("Dia: "));
    
    let fecha = new Date(y,m,d);
    console.log("Data ", fecha.getFullYear(), "/", fecha.getMonth(), "/", fecha.getDate());
}

function converteixDiesAFecha() {
    let dies = parseInt(prompt("Introdueix dies: "));
    
    let y = Math.floor(dies / 365); 
    let residu = dies % 365; 
    let m = Math.floor(residu / 30);
    residu %= 30; 
    let d = residu;

    console.log("\n Anys: ", y, "\n mesos: ", m, "\n dies: ", d); 
}