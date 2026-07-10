function suma(){
    //definimos las variables
    //recuperamos valores de los inputs
    let n1 =document.getElementById("n1").value;
    let n2 =document.getElementById("n2").value;
    //console.log(n1);
    //console.log(n2);
    //alert(n1)
    //alert(n2)
    //realizamos la suma
    let suma = parseInt(n1) + parseInt(n2);
    //console.log(suma);
    //asignamos el resultado al campo resrultado
    document.getElementById("resultado").value = suma;
}
//lo mismo con restar, multiplicar y dividir
function resta(){
    let n1 =document.getElementById("n1").value;
    let n2 =document.getElementById("n2").value;
    //console.log(n1);
    //console.log(n2);
    //alert(n1)
    //alert(n2)
    let resta = parseInt(n1) - parseInt(n2);
    //console.log(suma);
    document.getElementById("resultado").value = resta;
}

function multiplicacion(){
    let n1 =document.getElementById("n1").value;
    let n2 =document.getElementById("n2").value;
    //console.log(n1);
    //console.log(n2);
    //alert(n1)
    //alert(n2)
    let multiplicacion = parseInt(n1) * parseInt(n2);
    //console.log(suma);
    document.getElementById("resultado").value = multiplicacion;
}

function division(){
    let n1 =document.getElementById("n1").value;
    let n2 =document.getElementById("n2").value;
    //console.log(n1);
    //console.log(n2);
    //alert(n1)
    //alert(n2)
    let division = parseInt(n1) / parseInt(n2);
    //console.log(suma);
    document.getElementById("resultado").value = division;
}