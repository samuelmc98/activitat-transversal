function validacionForm() {
    var email=document.getElementById('femail').value;  
    var dni=document.getElementById('fdni').value;
    var nombre=document.getElementById('fnom').value;
    var apellido1=document.getElementById('apellido1').value;
    var apellido2=document.getElementById('apellido2').value;
    var categoria=document.getElementById('fcategoria').value;

    if(email=='' && nombre=='' apellido=='' && apellido2=='' && fecha==''){
        document.getElementById("message").innerHTML='<p style="color: red">Introduce todos los campos</p>';
        document.getElementById("femail").style.borderColor = "red";
        document.getElementById("fnom").style.borderColor = "red";
        document.getElementById("fdni").style.borderColor = "red";
        document.getElementById("apellido1").style.borderColor = "red";
        document.getElementById("apellido2").style.borderColor = "red";
        document.getElementById("fcategoria").style.borderColor = "red";

    }else if(dni==''){
        document.getElementById("message").innerHTML='<p style="color: red">Introduce el dni</p>';
        document.getElementById("femail").style.borderColor = "red";
        document.getElementById("fnom").style.borderColor = "red";
        document.getElementById("fdni").style.borderColor = "red";
        document.getElementById("apellido1").style.borderColor = "red";
        document.getElementById("apellido2").style.borderColor = "red";
        document.getElementById("fcategoria").style.borderColor = "red";

    }else if(nombre==''){
        document.getElementById("message").innerHTML='<p style="color: red">Introduce el nombre</p>';
        document.getElementById("femail").style.borderColor = "red";
        document.getElementById("fnom").style.borderColor = "red";
        document.getElementById("fdni").style.borderColor = "red";
        document.getElementById("apellido1").style.borderColor = "red";
        document.getElementById("apellido2").style.borderColor = "red";
        document.getElementById("fcategoria").style.borderColor = "red";

    }else if(apellido1==''){
        document.getElementById("message").innerHTML='<p style="color: red">Introduce el apellido1</p>';
        document.getElementById("femail").style.borderColor = "red";
        document.getElementById("fnom").style.borderColor = "red";
        document.getElementById("fdni").style.borderColor = "red";
        document.getElementById("apellido1").style.borderColor = "red";
        document.getElementById("apellido2").style.borderColor = "red";
        document.getElementById("fcategoria").style.borderColor = "red";

    }else if(apellido2==''){
        document.getElementById("message").innerHTML='<p style="color: red">Introduce el apellido2</p>';
        document.getElementById("femail").style.borderColor = "red";
        document.getElementById("fnom").style.borderColor = "red";
        document.getElementById("fdni").style.borderColor = "red";
        document.getElementById("apellido1").style.borderColor = "red";
        document.getElementById("apellido2").style.borderColor = "red";
        document.getElementById("fcategoria").style.borderColor = "red";

    }else if(categoria==''){
        document.getElementById("message").innerHTML='<p style="color: red">Introduce la categoria</p>';
        document.getElementById("femail").style.borderColor = "red";
        document.getElementById("fnom").style.borderColor = "red";
        document.getElementById("fdni").style.borderColor = "red";
        document.getElementById("apellido1").style.borderColor = "red";
        document.getElementById("apellido2").style.borderColor = "red";
        document.getElementById("fcategoria").style.borderColor = "red";

    }else{
        return true;
    }

    return false;
}