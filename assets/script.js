// alert('Hola Mundo!!');

window.addEventListener('DOMContentLoaded', (e) => {
    // con DOMContentLoaded me aseguro que todas las etiquetas HTML fueron cargadas y procesadas por el browser
    // más info en: https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event

    console.log('DOM fully loaded and parsed');


    let boton = document.getElementById('submitButton');
    // accedemos al elemento formulario por el Id y lo almacenamos en la variable formulario
    let formulario = document.getElementById('formulario')
    
    boton.addEventListener('click', (ev) => {
    // recuperar los valores del formulario 
        let nombre = document.getElementById("nombre").value;
        // console.log("El nombre del suscriptor es: " + nombre);

        let correo = document.getElementById('correo').value;
        // console.log('El correo es: ' + correo);

        let phone = document.getElementById("phone").value;
        let message = document.getElementById("message").value;

        let contacto = { // JSON =  JavaScript object notation
            // clave: valor 
            nombre_completo: nombre, // nombre
            correo, // email: email,
            phone,
            message,
            fecha_registro: (new Date()).toISOString()
        };

        // Reseteamos los campos del formulario
        formulario.reset();

    // console.dir(contacto);
    
    // Llammamos a la funcion para guardar los datos enviados por el formulario
    saveContacto(contacto);

    });

});


// Api y Fecth arquitectura REST
function saveContacto( contacto ){
    // url de Firebase
    const url = "https://proyectoportafolio-b42f9-default-rtdb.firebaseio.com/contacto.json"; //Link de la api de firebase
    fetch(url, {
        method: "POST",
        body: JSON.stringify(contacto)  //Convierte un objeto json a string
    });
};