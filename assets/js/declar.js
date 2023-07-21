const names = Object.freeze([
    'Nombre', // 0
    'Apellido', // 1
    'Tipo De Documento', // 2
    'Número De Documento', // 3
    'Correo Electronico', // 4
    'Dirección', // 5
    'Celular', // 6
    'Fecha', // 7
    'Hora', // 8
    'Color Favorito', // 9
    'Genero', // 10
    'Nombre De Usuario', // 11
    'Contraseña', // 12
    'Confimación De La Contraseña', // 13
    'Terminos Y Condiciones' // 14
])
, mss = Object.freeze({
    null: 'está vacio',
    espace: 'contiene un (os) espacios',
    inValid: 'contiene un (os) caracter (es) no valido (s)',
    long: 'está fuera de la longuitud (entre 4 - 30 letras)'
}), 
btn = document.getElementById('btnSubmit'),
cEr = document.getElementById('mss'),
texto = document.getElementById('texEr'),
auxiliar = document.querySelectorAll('.for'),
dats = {};

var errors,
validate = [];