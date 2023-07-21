const names = Object.freeze([
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
])
    , mss = Object.freeze({
        null: 'está vacio',
        espace: 'contiene un (os) espacios',
        inValid: 'contiene un (os) caracter (es) no valido (s)',
        long: 'está fuera de la longuitud (entre 4 - 30 letras)'
    }), 
    btn = document.getElementById('btnSubmit'),
    cEr = document.getElementById('mss'),
    texto = document.getElementById('texEr');

var errors;


btn.addEventListener('click', (e) => {

    // Error-------------------------------
    function mesError(a) {
        texto.innerHTML += `${a} <br>`;
    }

    function err({ i, inp, er }) {
        inp.className += ' error';
        let msss = `En "${names[i]}" el campo ${er}.`;
        alert(msss);
        mesError(msss);
        a();
    }

    function a() {
        validate = false;
    }

    // Validador ---------------------------------------
    function vacio({ iter, inp }) {
        let a = inp.type == 'checkbox' ? inp.checked :
            inp.value;

        if (a == "" || a == false) {
            return err({ i: iter, inp: inp, er: mss.null });
        } else return true;
    }

    // Si contiene espacios
    function espace(a) {
        return /\s/g.test(a.value);
    }

    // Si contiene un Numero
    function num(a) {
        return /[\d]/g.test(a.value);
    }

    // Si contiene un Caracter alfabetico
    function alpha(a) {
        return /([A-Z])\w+/gi.test(a.value);
    }

    // Regresa la longuitud de la cadena
    function long(a) {
        return a.value.length;
    }

    function ema(a) {
        // return (a.value.test(emailRegex) ? err :)
    }

    const auxiliar = document.querySelectorAll('.for'),
        dats = {}

    // Iteración del los input ------------------------------------------------- 
    for (let i = 0; i <= auxiliar.length; i++) {

        let ax = auxiliar[i];

        if (i == 2) {
            dats[ax.value]
        }

        if (vacio({ iter: i, inp: ax })) validate = false;

        switch (i) {
            case 0: case 1:
                if (!(30 >= long({inp:ax}) >= 4)) err({ i: i, inp: ax, er: mss.long })
                else
                    break;

            case 3:
                if (!(70 >= long({inp:ax}) >= 6)) err({ i: i, inp: ax, er: mss.long })
                else validate.push(true);
                break;

            // case 2: none

            case 3: case 6: case 7: case 8: case 11:
                if (espace({inp:ax}) || !(num({inp:ax}))) {
                    if (!(num({inp:ax}))) err({ i: i, inp: ax, er: mss.inValid });
                    else err({ i: i, inp: ax, er: mss.espace })
                }
                else validate.push(true)
                break;

            case 4:
                if (espace({inp:ax})) err({ i: i, inp: ax, er: mss.espace })
                break;



            default:

                break;
        }

        if (validate == undefined) {
            dats.names[i] = ax.value
        }
        
        if (auxiliar.length == i) {
            mss.id = 'mssE';        
        }
    }

    e.preventDefault();
})