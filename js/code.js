function calculo() {
    //alert("Hellow");
    let totalCuenta = document.getElementById('totalCuenta').value; //Recogemos la variable enviada desde html, toda la sintáxis es necesaria, si no especificamos algo como el value, extrae todo
    let servicio = document.getElementById('servicio').value; //Conjunto de elementos, nos da un array, y hay que seleccionar uno
    // Traer el valor de nº de personas mediante la clase asociada
    //let personas = document.getElementsByClassName('personas')[0].value;
    let personas = document.getElementById('personas').value; //Value solo para inputs

    let res = (servicio * totalCuenta) / personas;
    if (isNaN(res)) {
        alert('Introduce datos válidos');
    } else if (personas == '' || personas == 0) {
        alert('Introduce las personas que van a pagar');
    } else {
        document.getElementById('res').innerHTML = '<p>Total a pagar</p><h3> ' + res + ' Por persona<h3>'; //Trae el contenido de ese elemento (innerHTML), y en este caso cámbialo por res
    }

}

//Funcion para resetear el formulario
function limpiar() {
    document.getElementById('res').innerHTML = ""; //Recogo todo el id de html y lo convierto a vacío, si no me seguirá mostrando el resultado de la operación
    document.getElementById('totalCuenta').value = "";
    document.getElementById('personas').value = "";
}