function err({i,inp,er}) {
    
    inp.className += ' error';
    alert (`En "${names[i]}" el campo ${er}.`)
    a();
}

function a() {
    validate.push(false);
}