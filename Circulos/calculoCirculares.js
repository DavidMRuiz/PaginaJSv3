function calculoRadio(){
    /* algoritmo secuencial para calcular:
        - La longitud de la circunferencia
        - El area del circulo
        - El volumen de la esfera 
       VERSION: 2.0 
       
       Con formulario de entrada
       
    */

    /* entrada de datos*/
    //let radio=Number(prompt("Dame el radio:"));
    let radio=Number(document.getElementById("radio").value);
    const PI=3.1416;

    /* calculo interno */
    let circunferencia=2*radio*PI;
    let circulo=radio**2*PI;
    let esfera=(4/3)*radio**3*PI;

    /* mostrar resultado */
    document.getElementById("resultados").style.visibility="visible"
    document.getElementById("circunfe").innerHTML="La circunferencia es: "+circunferencia+"cm"
    document.getElementById("circulo").innerHTML="El circulo es: "+circulo+"cm^2"
    document.getElementById("esfera").innerHTML="La esfera es: "+esfera+"cm^3"

}
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }