function validacionForm() {
    var email=document.getElementById('femail').value;  
    var dni=document.getElementById('fdni').value;
    var nombre=document.getElementById('fnom').value;
    var definido = true;

    if (nombre == "") {
        document.getElementById("fnom").style.borderColor = "red";
        definido = false;
    } else {
        document.getElementById("fnom").style.borderColor = "initial";
    }
    if (email == "") {
        document.getElementById("femail").style.borderColor = "red";
        definido = false;
    } else {
        document.getElementById("femail").style.borderColor = "initial";

    }
    if (dni !== "") {

        document.getElementById("fdni").style.borderColor = "initial"; 
        console.log(dni);
        comprobarDni(dni);
    } else {
        document.getElementById("fdni").style.borderColor = "red";
        definido = false;
    }
    if (definido == false) {
        document.getElementById("message").innerHTML = "El dni, el nombre y el email son necesarios";
    } else {}
    return definido;
}

function validarFor() {
    var inputs = document.getElementsClassName('data');
    for (let i = 0; i < inputs.length; i++) {
        console.log(inputs[i].type);
    }
    return false;
}

function comprobarDni(dni) {
    var control = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
    var $1;
    var letra;
    if (dni.length != 9) {
        alert('Si el número tiene menos de 8 dígitos hay que rellenar el número con ceros al principio hasta tener 8 dígitos y una letra');
    } else {
        letra = dni.slice(8, 9);
        dni = dni.slice(0, 8);
        $1 = dni.substr(0, 1);
        if ($1 == 'X') {
            dni = dni.replace("X", "0");
            console.log(dni);
        } else if ($1 == 'Y') {
            dni = dni.replace("Y", "1");
            console.log(dni);
        } else if ($1 == 'Z') {
            dni = dni.replace("Z", "2");
            console.log(dni);
        }  
    }
    if (letra == control[dni % 23]) {
        return true;
    } else {
        alert('El número de DNI no es correcto');
        return false;
    }

}