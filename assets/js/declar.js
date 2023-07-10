const names =  Object.freeze([
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
})
, btn = document.getElementById('btnSubmit'),
cEr = document.getElementById('mss');