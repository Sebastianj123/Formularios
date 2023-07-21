// btn.addEventListener("submit",
 function as (e) {
    validate = [];
    // Iteración del los input ------------------------------------------------- 
    for (let i = 0; i <= auxiliar.length; i++) {

        let ax = auxiliar[i];

        if (vacio({ iter: i, inp: ax })) valErr();

        switch (i) {

            // Evalua el nombre y el apellido
            case 0: case 1:
                long1_vali({ax:ax,i:i});
                break;

            // Evalua el documento y el número de telefono
            case 3:
                num_vali({ax:ax, i:i});
                spa_vali({ax:ax,i:i});
                break;

            case 6:

                break;
            default:
                break;
        }

        if (!validate.includes(false) || i == 2) {
            dats[names[i]] = ax.value;
        } else {
            mss.id = 'mssE';        
        }
    }

    e.preventDefault();
};