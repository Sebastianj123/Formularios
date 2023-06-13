// Logica

var datos = {

},
as;



document.getElementById('btnSubmit').addEventListener('click', ()=> {

    function revisar(n,i) {
        if (i === "") {

            return alert (`El campo "${n}" esta vacío`), as = true;
        
        } else if (n == 'tem') {
            return as = false;
        } 
     }
    
datos = {
    nom: document.getElementById('name').value,
    ape: document.getElementById('lastName').value,
    typD: document.getElementById('typeDocument').value,
    doc: document.getElementById('document').value,
    email: document.getElementById('email').value,
    addres: document.getElementById('address').value,
    tel: document.getElementById('cellphone').value,
    fecha: document.getElementById('birthdate').value,
    time: document.getElementById('lunchTime').value,
    color: document.getElementById('color').value,
    sex: document.getElementById('Genero').value,
    user: document.getElementById('nameUser').value,
    pass: document.getElementById('password').value,
    pass1: document.getElementById('password1').value,
    tem: document.getElementById('check').value
};

console.log(datos);
for (let clave in datos){
    revisar(clave,datos[clave]);

    if (as) {
        break;
    } else {
        window.open('../../view/vista2.html');
        document.close();
        return alert('se abrira vista2');
        break;
    }

  }

})