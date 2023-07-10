const names = [
    'Nombre',
    'Apellido',
    'Tipo De Documento',
    'Número De Documento',
    'Correo Electronico',
    'Dirección',
    'Celular',
    'Fecha',
    'Hora',
    'Color Favorito',
    'Genero',
    'Nombre De Usuario',
    'Contraseña',
    'Confimación De La Contraseña',
    'Terminos Y Condiciones'
]

/* Funcion revisión(a)

Consta de una función declarada la cual contiene un parametro de entrada
y cuatro parametros de salida (espace, num, alpha, long) los cuales
corresponden a un balor BOLEANO (True or false) si es que posee,
espacios, caracteres númericos o alfabeticos.
El ultimo parametro de salida es long el cual devuelve el largo de la cadena ingresada

*/

// function revicion(a) {
//     return espace = /\s/g.test(a),
//     num = /[\d]/g.test(a),
//     alpha = /([A-Z])\w+/gi.test(a),
//     long = a.length;
// }

// Si contiene espacios
function espace(a) {
    return espace = /\s/g.test(a);
}

// Si contiene un Numero
function num(a) {
    return num = /[\d]/g.test(a);
}

// Si contiene un Caracter alfabetico
function alpha(a) {
    return alpha = /([A-Z])\w+/gi.test(a);
}

// Regresa la longuitud de la cadena
function long(a) {
    return long = a.length;
}

/*vacio(n,i)

Esta función corresponde a una validacion del parametro de entrada el cual si es vacio su output corresponde un alerta
de lo contrario devuelve otra función

*/

function vacio(i,e) {
    let a;
    if (e.type == 'checkbox') a = e.checked;
    else a = e.value;

    if (a == "" || a == false) {
        mensajeError(names[i]);
        e.className += ' error';
        return alert (`El campo "${names[i]}" esta vacío`);
        
    } else return true;
 }


 /* validateData (objForm,e)

Se declara la función validar Dato la cual será ejecutada al "subir" el formulario con el botón input type submit
    
Esta función poseé dos parametros de entrada:

    - objForm: Recupila el "id" del botón.
    - e: recopila el objeto como tal del boton por el cuál se ejecuta la función (e.preventDefault();) con la cuál se busca que no se recargue la página

En esta misma función se declaran tres variables principales:
    - objFormulario: Recopila como tal el Formulario (DOOM).
    - auxiliar: Recopila todos los inputs.
    - validate: Poseé un valor Boleano el cual se usara para un condicional "if" en un futúro

Se declara un ciclo for el cuál se recorreara por todos los inputs que haya.
Dentro del ciclo se declara un condicional el cual valida que si el input (if(auxiliar[i].type == "submit")) corresponde a el "submit" (Botón de subir) alerte que es un boton,
    encambio si este no corresponde a la validacion anterior se haga otra validacion interna (if (validateInput(auxiliar[i].value))) que llama a otra función con un input (auxiliar[i].value) y con el output de esta se verá si se ejecuta o no,
    y esta validación es la que dictara el valor Boleano que tenga validar.
Luego de esto mismo tenemos otra validación dictada por un condicional if el cual dicta que si validar (validate) es verdadero
llame la función "getData();" (obtener Dato/obtener Valor) con un valor de entrada: objForm



    */

function validateData(objForm,e) {

    var auxiliar = document.querySelectorAll('.for'),
    validate;
    
    console.log(objForm);
    console.log(auxiliar);

    // debugger;

    for (let i = 0; i <= auxiliar.length; i++) {

            let ax = auxiliar[i];

            if (vacio(i,ax)){
                return validate = true;
            } 
            else {
                console.log('f');
            }

        // if (validate) {

        //     getData(objForm);
        // }
    }

    e.preventDefault();
}