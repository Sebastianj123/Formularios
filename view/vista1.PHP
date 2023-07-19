<?php
$host = 'localhost'; 
$db = 'fromProj'; 
$usr = 'root';
$pass = '';
$call_v_s = 'SELECT * FROM v_s;'; 

$con = new mysqli($host,$usr,$pass,$db);

if ($con->connect_error) {
    die("Connection failed: " . $con->connect_error);
} else {
    echo "Connected successfully :d " . $host . ' ' . $db . ' ' . $usr . ' ' . $pass . '<br>' ;
}

// Se llama la vista.
$out = $con->query($call_v_s);
if (!$out) {
    echo "Error of sql query " . $con->error;
    $con->close();
} else {
    // echo($out->num_rows);
    $data = $out->fetch();
    print_r($data);
    
    // for ($i=0; $i < count($data); $i++) { 
    //     // echo($data[3][$i] . '1 <br>');
    // }
    // echo('<table>
    //     <td class="id">#ID</td>
    //     <td class="nam">SEXO</td>');

    // for ($i= 0 ; $i <= count($data); $i++) { 
    //     $a = $i;
    //     echo('
    //     <tr id="td'.$data["sex_id"]'"> 
    //         <td class="id">'.$a++.'</td>
    //         <td class="nam">'.$data["sex_nam"].'</td>
    //     </tr>');
    // }
    // echo('
    //         <td class="id">#ID</td>
    //         <td class="nam">SEXO</td>
    // </table>
    // ');
        
    // if ($out->num_rows > 0) {
    //     echo('<table> <td class="id">#ID</td> <td>SEXO</td>');
    //     while($row = $out->fetch_assoc()) {
    //         echo '<tr>' . '<td>'. $row['sex_id']. '</td>' . '<td>'. $row['sex_nam'] . '</td>' . '<tr>';
    //     }
    //     echo('<td>#ID</td> <td>SEXO</td> </table>');
    // } else {
    //     echo "0 results";
    // }
}

$con->close();

?>