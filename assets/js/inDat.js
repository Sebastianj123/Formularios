// Logica

const asa = {
    a: 'Posee un espacio',
    b: 'Posee un caracter numerico',
    c: 'Posee un caracter alfabetico',
    d: 'No conicide con la estructura de un correo',
    e: 'Esta fuera de la longuitud Minima',
    f: 'Esta fuera de la longuitud Maxima',
    g: 'El campo esta vacio',
    h: 'No se a seleccionado el campo',
    i: 'No posee la edad requerida',
    j: 'Ingrese un valor valido'
},
errores = {};

var datos = new Array,
as;



document.getElementById('btnSubmit').addEventListener('click', ()=> {
    
    /* Funcion revisión.
    
    Consta de una función declarada la cual contiene un parametro de entrada
    y cuatro parametros de salida (espace, num, alpha, long) los cuales
    corresponden a un balor BOLEANO (True or false) si es que posee,
    espacios, caracteres númericos o alfabeticos.
    El ultimo parametro de salida es long el cual devuelve el largo de la cadena ingresada
    
    */
    function revicion(a) {
        return espace = /\s/g.test(a),
        num = /[\d]/g.test(a),
        alpha = /([A-Z])\w+/gi.test(a),
        long = a.length;
    }

    /* Función revisarCamp
    
        En esta función se ejecuta la función revisión con el fin de ejecutarla por cada 
        uno de los inputs.

        Se tiene un switch (condicional) el cual posee otros condicionales if() por 
        cada propiedad o error no deseado que se encuentre en el formulario
        el cual por cada input se crea un array en el objeto de errores que en un futuro se iterara 
    */
    function revisarCamp(n,i) {
        
        // Se ejecuta la funcion "revisión"
        revicion(i);

        switch (n) {
            
            case 'Nombre':

            errores.Nombre = [];

                if (espace) {
                    errores.Nombre.push(asa.a);
                }

                if (num) {
                    errores.Nombre.push(asa.b);
                }

                if (long < 5) {
                    errores.Nombre.push(asa.e);
                }

                if (long > 30) {
                    errores.Nombre.push(asa.f);
                }

                break;
            
            case 'Apellido':

                errores.Apellido = [];

                if (espace) {
                    errores.Apellido.push(asa.a);
                }
                if (num) {
                    errores.Apellido.push(asa.b);
                }
                if (long < 5) {
                    errores.Apellido.push(asa.e);
                }

                if (long > 30) {
                    errores.Apellido.push(asa.f);
                }

                break;
                
            case 'Fecha' :

                errores.n = [];
                let fecha = (Date.prototype.getUTCFullYear()) - datos.Fecha.getUTCFullYear;
                
                if  (fecha < 18) {
                    n.push(asa.i);
                }

                if (fecha >= 120) {
                    n.push(asa.j);
                }

            break;

            default:
                break;
        }
    }

    function vacio(n,i) {
        if (i === "") {

            return alert (`El campo "${n}" esta vacío`), as = true;
        
        } else {
            
            return revisarCamp(n,i);
            
        } 
     }
    
datos = {
    Nombre: document.getElementById('name').value,
    Apellido: document.getElementById('lastName').value,
    TipoDocumento: document.getElementById('typeDocument').value,
    Documento: document.getElementById('document').value,
    Email: document.getElementById('email').value,
    Addres: document.getElementById('address').value,
    Telefono: document.getElementById('cellphone').value,
    Fecha: document.getElementById('birthdate').value,
    Hora: document.getElementById('lunchTime').value,
    Color: document.getElementById('color').value,
    Genero: document.getElementById('Genero').value,
    Usuario: document.getElementById('nameUser').value,
    Contraseña: document.getElementById('password').value,
    Contraseña_Verificacion: document.getElementById('password1').value,
    Terminos: document.getElementById('check').value
};

console.log(datos);

for (let clave in datos){

    vacio(clave,datos[clave]);

    if (as) {
        
        break;

    } else {
        
        window.open('../../view/vista2.html');
        document.close();
        return alert('se abrira vista2');
    
    }

  }

})


/*
    // Si contiene espacios
    function espace(a) {
        return espace = /\s/g.test(a);
    }

    function num(a) {
        return num = /[\d]/g.test(a);
    }

    function alpha(a) {
        return alpha = /([A-Z])\w+/gi.test(a);
    }

    function long(a) {
        return long = a.length;
    }
    */