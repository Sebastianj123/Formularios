function err({i,inp,er}) {
    
    inp.className += ' error';
    alert (`En "${names[i]}" el campo ${er}.`)
    valErr();
}

function valErr() {
    validate.push(false);
}

function valTru() {
    validate.push(true);
}