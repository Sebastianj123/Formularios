<?php

$host = 'localhost'; 
$db = 'fromProj'; 
$usr = 'root';
$pass = '';

echo(
'<!DOCTYPE html/>
<html lang="en"/>

<!-- Cabeza (codigo visible solo para el navegador) -->
<head>
    
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario</title>

        <!-- Linkeado de css -->
    <link rel="stylesheet" href="../assets/css/vista1.css">

        <!-- Linkeado de iconos externos -->
        <!-- <script src="https://kit.fontawesome.com/bb68000e5f.js" crossorigin="anonymous"></script> -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

        <!-- Scrollbar -->
    <link rel="stylesheet" href="../assets/css/scroll.css">

        <!-- Error CSS -->
    <link rel="stylesheet" href="../assets/css/error.css">

        <!-- Ventana Emergente (error) -->
    <link rel="stylesheet" href="../assets/css/mss.css">
        <!-- Link del icono (página) -->
    <link rel="icon" href="../assets/img/form.ico">
</head>

<body>

<div id="bodydiv">

        <!-- Sección de la izquierda -->
    <aside>

                <!-- Titulo -->
            <h1>FORMULARIO DE REGISTRO</h1>
    
                <!-- Contenedor del icono -->
            <figure id="icono">
    
                    <!-- Circulo externo (negro) del icono -->
                <div id="circle">
    
                        <!-- Circulo interno (gris) del logo -->
                    <div id="circle1">
    
                            <!-- Logo -->
                        <img src="../assets/img/user.svg" alt="Incono De Usuario.sgv" title="user">
        
                    </div>

                </div>

            </figure>
    
        </aside>

        <!-- Sección de la derecha -->
    <form action="" method="">

            <!-- Formulario donde se van a ingresar los datos -->
            <!-- Aquí dentro se encuentran etiquetas "hijas directas" las cuales son hr div#inputs -->
        <article>
                
                <!-- Etiqueta div que contiene todo el "formulario" (hace las de form) -->
                <!-- cotiene:
                - Div con id "nomAPe" (div que contiene los input con sus label de nombre y apellido tipo text)
                - hr Divisorio con clase "division"
                - Div con id "otrosDatos" que contiene un div con id "doc" (tipo y numero de documento), 
                        input y label de email id "email" name "email",
                        Direccion id "address" name "address",
                        TelCelular id "cellphone" name "cellphone"
                - hr Divisorio con clase "division"
                - Div con id "timeColor" que contiene 
                -->
            <div id="inputs">

                <div id="nomApe">

                        <!-- Nombre -->
                        <!-- <label for="name">Nombre: </label> -->
                    <input type="text" value="" placeholder="Digitar Nombre" id="name" name="name" required class="for"/>
                

                        <!-- Apellido -->
                        <!-- <label for="lastName">Apellido: </label> -->
                    <input type="text" value="" placeholder="Digitar Apellido" id="lastName" name="lastName" required  class="for"/>

                </div>

                    <!-- Divisor -->
                <hr class="division">
                
                
                    <!-- Se encuentra el tipo de documento, numero de documento, email, direccion y celular -->
                <div id="otrosDatos">

                        <!-- Datos relacionados con el documento de la persona (tipo doc y numero de doc)-->
                    <div id="doc">

                            <!-- Selecionar el tipo de documento -->
                        <select name="typeDocument" id="typeDocument" required class="for"/>
                        <!-- Opciones del input Select -->
                        '
                        $mysqli = new mysqli($host,$usr,$pass,$db);

                        if ($mysqli -> connect_errno) {
                            echo "Failed to connect to MySQL: " . $mysqli -> connect_error;
                            exit();
                        }

                        $callTD = "SELECT * FROM vistaProductosBarato;";
                        $tyDoc = $mysqli -> query($callTD);

                        // Perform a query, check for error
                        if (!$tyDoc) {
                            echo("Error description: " . $mysqli -> error);
                        }

                        $row = $result -> fetch_assoc();
                        for ($i=0; $i < count($row); $i++) { 
                            echo('<option value="'.$i.'">'.$row['tyDoc_nam'][].'</option>');
                        }
                        
                        
                        $mysqli -> close();
                        '</select>
                        

                            <!-- Documento (Número) -->
                            <!-- <label for="document" class="document">Número Doc: </label> -->
                        <input type="number" value="" placeholder="Digitar Documento" id="document" name="document" required class="for" />

                    </div>

                        <!-- Email -->
                        <!-- <label class="email" for="email">Correo: </label> -->
                    <input type="email" value="" placeholder="Digitar Correo Electrónico" id="email" name="email" required class="for" />

                        <!-- Dirección -->
                        <!-- <label class="address" for="address">Dirección: </label> -->
                    <input type="text" value="" placeholder="Digitar Dirección" id="address" name="address" required class="for" />

                        <!-- TElefono Celular -->
                        <!-- <label class="cellphone"  for="cellphone">Celular: </label> -->
                    <input type="tel" value="" placeholder="Digitar Celular" id="cellphone" name="cellphone" required class="for" />
                
                </div>

                <hr class="division">

                    <!-- Se encuentran datos relacionados con fechas y el color -->
                <div id="timeColor">

                    <div id="time">
                        
                        <!-- Fecha -->
                        <!-- <label class="dateBir" for="birthdate">Fecha De Nacimiento: </label> -->
                        <input type="date" value="" placeholder="Fecha de Nacimiento" id="birthdate" name="birthdate" required class="for" />

                        <!-- Tiempo (hora) -->
                        <!-- <label class="lunchTime" for="lunchTime">Hora Del Almuerzo: </label> -->
                        <input type="time" value="" id="lunchTime" name="lunchTime" required class="for" />
                        
                    </div>
                
                        <!-- Se encuentra el label e input del color favorito -->
                    <div id="colorDiv">

                            <!-- Color label -->
                        <label for="color" id="colorLabel">Color Favorito: </label>
                            
                            <!-- Color input -->
                        <input type="color" value="" id="color" name="color" required class="for" />

                    </div>

                </div>

                    <!-- Divisor -->
                <hr class="division">

                    <!-- Contenedor del input select genero y su respectivo label -->
                <div id="generoDiv">

                        <!-- Label -->
                    <label for="sex">Genero: </label>

                        <!-- Input select -->
                    <select name="sex" id="Genero" placeholder="Genero" required class="for">

                            <!-- Opciones del input select -->
                        <option></option>
                        <option value="men"> Hombre</option>
                        <option value="women">Mujer</option>
                        <option value="other">Otro</option>

                    </select>

                </div>
               
                    <!-- Divisor -->
                <hr class="division">
                
                    <!-- Contenedor del registro de usuario (nombre de usuario, y contraseña) -->
                <div id="userDiv">

                        <!-- Inpu nombre de usuario -->
                    <input type="text" value="" id="nameUser" name="nameUser" placeholder="Digite Su Nombre De Usuario" required class="for"/>
                    
                        <!-- Input contraseña -->
                    <input type="password" value="" id="password" name="password" placeholder="Digite Su Contraseña (Min 6 caracteres)" required class="for" />
                    
                        <!-- Input repetir contraseña -->
                    <input type="password" value="" id="password1" name="password1" placeholder="Digite Nuevamente Su Contraseña" required class="for" />
                
                </div>

                    <!-- Divisor -->
                <hr class="division">

                    <!-- Contenedor de terminos y condiciones -->
                <div id="terminos">

                        <!-- input Check -->
                    <input type="checkbox" name="check" id="check" class="for">
                    
                        <!-- Label del check -->
                    <label for="check">Acepto los <a href="" target="_blank">terminos y condiciones</a></label>

                </div>
            
            </div>
        
            <div id="bot">

                <input type="button" value="ENVIAR" id="btnSubmit" name="btnSubmit" required/>

            </div>

        </article>

    </form>

</div>

<div id="mss">
    <h1>Error</h1>
    <p id="texEr">Para rectificar nuevamente la corrección de los errores se debe presionar nuevamente el boton "Enviar".<br></p>
    <div id="x">
        X
    </div>
</div>
    
</body>

<!-- script -->
<script src="../assets/js/js.js"></script>
<!-- <script src="../assets/js/mssEr.js"></script>
<script src="../assets/js/validador.js"></script>
<script src="../assets/js/declar.js"></script> -->

</html>'
)

?>