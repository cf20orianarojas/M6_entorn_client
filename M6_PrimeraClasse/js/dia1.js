function HelloWorld() {
    alert('Hola Món!');
}

function Hover() {
    alert('Estas sobre mi ahora :O');
}

function dragImatge() {
    alert(` AHHAAGSGSSS TENGO HAMBREE JEFE `);
}

function muestraText(text) {
    alert('Simom says: ' + text); // muestra el texto del input
}

function Multiplica() {
    let number = document.getElementById('numero').value;
    for(let n = 1; n <= 10; n++) {
        console.log(number + " x " + n + " = " + (number*n));
    }
}