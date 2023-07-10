function vacio({iter, inp}) {
    let a = inp.type == 'checkbox' ? inp.checked :
        inp.value;

    if (a == "" || a == false) {
        return err({ i: iter, inp:inp, er: mss.null });
    } else return true;
}

// Si contiene espacios
function espace(a) {
    return espace = /\s/g.test(a.value);
}

// Si contiene un Numero
function num(a) {
    return num = /[\d]/g.test(a.value);
}

// Si contiene un Caracter alfabetico
function alpha(a) {
    return alpha = /([A-Z])\w+/gi.test(a.value);
}

// Regresa la longuitud de la cadena
function long(a) {
    return long = a.value.length;
}

function ema(a) {
    // return (a.value.test(emailRegex) ? err :)
}
