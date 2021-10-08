function calculo() {
    //alert("Hellow");
    let totalCuenta = document.getElementById('totalCuenta').value; //Recogemos la variable enviada desde html, toda la sintáxis es necesaria, si no especificamos algo como el value, extrae todo
    let servicio = document.getElementById('servicio').value; //Conjunto de elementos, nos da un array, y hay que seleccionar uno
    // Traer el valor de nº de personas mediante la clase asociada
    let personas = document.getElementById('personas').value;
    console.log('total: ' + totalCuenta + ' servicio: ' + servicio + ' personas: ' + personas);
}