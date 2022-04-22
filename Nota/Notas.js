/* VERSIÓN CON PUNTOS ADICIONALES POR TRABAJOS INDEPENDIENTES:
           - PUNTO POR TRABAJO EN WP Y/O
           - PUNTO POR TRABAJO EN JS
           LA CASILLA CHECKBOX ME PERMITE QUE ESTÉN MARCADAS, UNA,
           DOS, O NINGUNA O LAS DOS */
           function calculoNota(){
            /* entrada de datos */
            let notaWordpress=Number(document.getElementById("wordPress").value);
            let notaJs=Number(document.getElementById("js").value);
            // cuando cojo el dato de una casilla de verificación
            // cojo la casilla entera (no value)
            let trabajoWp=document.getElementById("trabajowp");
            let trabajoJs=document.getElementById("trabajojs");
 
            /* calculo de nota */
            let notaFinal=(75*notaWordpress+25*notaJs)/100;
 
            /* vamos a ver si hay trabajos adicionales */
            if (trabajowp.checked==true){
                notaFinal++;
            }
            if (trabajojs.checked==true){
                notaFinal++;
            }
            /* comprobamos que el resultado está dentro del rango */
 
            if (notaFinal>10) {
                notaFinal=10;
            }
 
            /* salida de resultados */
 
            document.getElementById("resultado").innerHTML=
            "La nota final es: "+notaFinal;
 
            if (notaFinal>=5){
             document.getElementById("indicacion").innerHTML=
            "Enhorabuena, estás aprobado!";
            } else {
             document.getElementById("indicacion").innerHTML=
            "Ánimo, tendrás que volver a intentarlo";
            }
         }