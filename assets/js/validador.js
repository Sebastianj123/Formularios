function vacio({iter, inp}) {
    
    let tyInp = inp.type == 'select-one'
                ? inp.checked
                : inp.value;


    if (tyInp == "" || tyInp == false) {
        return err({ i: iter, inp:inp, er: mss.null });
    } else return true;
};

// Si contiene espacios
function espace({inp}) {
    return /\s/g.test(inp.value);
};

// Si contiene un Numero
function num({inp}) {
    return /[\d]/g.test(inp.value);
};

// Si contiene un Caracter alfabetico
function alpha({inp}) {
    return /([A-Z])\w+/gi.test(inp.value);
};

// Regresa la longuitud de la cadena
function long({inp}) {
    return inp.value.length;
};

function ema({inp}) {
    return  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/g.test(inp.value);
};

// -------------------------------

// Valida si esta entre 4-30 caracteres de lo contrario marca un error (err({ i: i, inp: ax, er: mss.long }))
function long1_vali({ax,i}) {
    if (!(30 >= long({inp:ax}) && long({inp:ax}) >= 4 && long({inp:ax}) !== 0)) err({ i: i, inp: ax, er: mss.long })
}

// Valida si esta entre 6-70 caracteres de lo contrario marca un error (err({ i: i, inp: ax, er: mss.long }))
function long2_vali({ax,i}) {
    if (!(70 >= long({inp:ax}) && long({inp:ax}) >= 6)) err({ i: i, inp: ax, er: mss.long })
}

// Valida si el valor posee un espacio, si lo posee marca error

function spa_vali({ax,i}) {
    if (espace({inp:ax})) err({ i: i, inp: ax, er: mss.espace });
}

// valida si el caracter es un número, de lo contrario marca error
function num_vali({ax,i}) {
    if (!num({inp:ax})) err({ i: i, inp: ax, er: mss.inValid });
}