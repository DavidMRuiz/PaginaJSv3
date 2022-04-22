/* reducimos las tres funciones a una con un parámetro
           El parámetro es el que produce el efecto reducción,
           ampliación o reset                                  */

           function cambiarTamanoParrafo(tamano){
            // con el método getElementsByTagName, capturo
            // TODOS los párrafos de la página
            let parrafos=document.getElementsByTagName("p");
            
         /*   for (i=0;i<parrafos.length;i++){
                parrafos[i].style.fontSize=tamano;// el tamaño es un parámetro
            } */

            for (let p of parrafos){ //versión abreviada para arrays del bucle for
                p.style.fontSize=tamano;
            }
        }

        function myFunction() {
            var x = document.getElementById("myTopnav");
            if (x.className === "topnav") {
              x.className += " responsive";
            } else {
              x.className = "topnav";
            }
          }