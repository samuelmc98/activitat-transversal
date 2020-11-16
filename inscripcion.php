<?php
require_once 'conexion.php';
require_once 'config.php';


    try {
        $pdo->beginTransaction();
        
        //$query=
        $sentencia1=$pdo->prepare ("INSERT INTO `tbl_participante` (id_participante, nombre_participante, apellido1_participante, apellido2_participante, DNI_participante, email_participante, Sexo_Participante) 
        VALUES (NULL,?,?,?,?,?,?);");
        //$sentencia1=$pdo->prepare($query);
            $dni=$_REQUEST['fdni'];
            $nom=$_REQUEST['fnom'];
            $primer=$_REQUEST['apellido1'];
            $segon=$_REQUEST['apellido2'];
            $email=$_REQUEST['femail'];
            $sexe=$_REQUEST['fsexe'];

        $sentencia1->bindParam(1,$nom);
        $sentencia1->bindParam(2,$primer);
        $sentencia1->bindParam(3,$segon);
        $sentencia1->bindParam(4,$dni);
        $sentencia1->bindParam(5,$email);
        $sentencia1->bindParam(6,$sexe);
        $sentencia1->execute();
        $pdo->commit(); //hace todas las sentencias

        echo 'todo bien';
        //header('Location: ../view/inscripcion.html');


    } catch (Exception $ex) {
        /* Reconocer un error y no hacer los cambios */
        $pdo->rollback();
        echo $ex->getMessage();
        echo 'error';
    }