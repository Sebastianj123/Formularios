<?php
$conexion = mysqli_connect('local','root','');
$name = $_POST['name'];
$surName = $_POST['lastName'];
$tyDoc = $_POST['typeDocument'];
$numDoc = $_POST['document'];
$email = $_POST['email'];
$direc = $_POST['address'];
$tel = $_POST['cellphone'];
$fecha = $_POST['birthdate'];
$time = $_POST['linchTime'];
$color = $_POST['color'];
$sex = $_POST['sex'];
$nmUs = $_POST['nameUser'];
$pass = $_POST['password'];
$check = $_POST['check'];
$btnSubmit = $_POST['btnSubmit'];

if (!$conexion) {
    echo('No se pudo conectar con el Server');
} else {
    echo('Se conecto con el server');
}

$database = 'formUser';
$db = mysqli_select_db($conexion,$database);

if(!$db) {
    echo 'no se encotro la base de datos';
} else {
    echo '<h1> Tabla seleccionada </h1>';
}

$instruccion = "INSERT INTO userInfo (nm, srNam, sex, birt, addr, tel) 
value ($name, $surName, $sex, $fecha, $direc, $tel);

INSERT INTO `doc`(`typDoc`, `numDoc`) VALUES ($tyDoc, $numDoc);

INSERT INTO `reg`(`ema`, `nmU`, `pass`) VALUES ($email, $nmUs, $pass);

INSERT INTO `otr`(`tim`, `cl`, `term`) VALUES ($time, $color, $check);";

$resultado = mysqli_query($conexion,$instruccion);

$consulta = "SELECT * FROM userinfo, doc, reg, otr;";

$result = mysqli_query($conexion,$consulta);

echo '<table> 
<tr> 
<th> id </th>
<th> Nombre </th>
<th> Apellido </th>
<th> Tipo De Documento </th>
<th> Documento </th>
<th> Correo </th>
<th> Dirección </th>
<th> Celular </th>
<th> Fecha </th>
<th> Tiempo </th>
<th> Color </th>
<th> Genero </th>
<th> Nombre De Usuario </th>
<th> Contraseña </th>
<th> Terminos y codiciones </th>
</tr>';

while ($a = mysqli_fetch_array($result)) {
    
    echo "
    <tr> 
        <td>" . $a['id'] . "</td>
        <td>" . $a['nm'] . "</td>
        <td>" . $a['srNam']. "</td>
        <td>" . $a['typDoc'] . "</td>
        <td>" . $a['numDoc'] ."</td>
        <td> " . $a['ema'] . " </td>
        <td> " . $a['addr'] . " </td>
        <td> " . $a['tel'] . " </td>
        <td> " . $a['birt'] . "</td>
        <td> " . $a['tim'] . " </td>
        <td> " . $a['cl'] . " </td>
        <td> " . $a['sex'] . " </td>
        <td> " . $a['nmU'] . " </td>
        <td> " . $a['pass'] . " </td>
        <td> " . $a['term'] . " </td>
    </tr>
    ";
};

?>