

document.addEventListener('DOMContentLoaded',main);



function main(){


    /****************
    **** PUNTO 2 ****
    *****************/
    
    console.log("Contenido del DOM cargado");

    
    /****************
    **** PUNTO 3 ****
    *****************/
    
    document.getElementById('origen').value = "<p>Este contenido <strong>está listo</strong><br>para ser editado y pasarlo abajo.</p>"
    

    /****************
    **** PUNTO 4 ****
    *****************/

    let listaInput = document.getElementsByTagName('input');
    let boton = document.getElementsByTagName('button')[0];
    
    for (let index = 0; index < listaInput.length; index++) {
        listaInput[index].disabled = false;    
    }
    
    boton.disabled = false;

    /****************
    **** PUNTO 5 ****
    *****************/


    let textoOrigen = document.getElementById('origen');
    let textoDestino = document.getElementById('destino');
    
    listaInput[0].addEventListener('click',punto5_a);
    listaInput[1].addEventListener('click',punto5_b);
    listaInput[2].addEventListener('click',punto5_c);
    listaInput[3].addEventListener('click',punto5_d);
    listaInput[4].addEventListener('click',punto5_e);
    
    
    function punto5_a(){
        
        textoDestino.innerHTML = textoOrigen.value
    }
    
    

    function punto5_b(){

        textoDestino.innerHTML += textoOrigen.value
    
    
    }

    function punto5_c(){

        for (let index = 0; index < 5; index++) {
            punto5_b();
            
        }
    }

    function punto5_d(){

        for (let index = 0; index < 2; index++) {
            punto5_c();
            
        }

    }

    function punto5_e(){

    let cantidadVeces = prompt("Ingrese la cantidad de veces que desea agregar el texto")
    
        for (let index = 0; index < cantidadVeces; index++) {
            punto5_b();
            
        }

    }

    /****************
    **** PUNTO 6 ****
    *****************/

    listaInput[5].addEventListener('click',punto6_a);
    listaInput[6].addEventListener('click',punto6_b);
    boton.addEventListener('click',punto6_c);

    function punto6_a(){

        textoDestino.innerHTML = "";
    }

    function punto6_b(){

        let mayuscula = textoDestino.innerHTML;
        mayuscula = mayuscula.toUpperCase();
        textoDestino.innerHTML = mayuscula; 
    }

    function punto6_c(){

        let minuscula = textoDestino.innerHTML;
        minuscula = minuscula.toLowerCase();
        textoDestino.innerHTML = minuscula;
    }

    /****************
    **** PUNTO 7 ****
    *****************/
    
    

    function final(){

        let listaLi = document.getElementsByTagName('li');
        
        for (let index = 0; index < listaLi.length; index++) {
            listaLi[index].innerHTML = "[OK]"+listaLi[index].innerHTML;
            
        }
    }

    setTimeout(() => {
        final()
    }, 5000);
    

}





