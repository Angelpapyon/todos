function ejemplouno() {
    let a = document.getElementById("numero").value;
    let i = 0;
    ress = "";

    while (i < a) {
        i++;
        ress += i * 2 + " ";
        document.getElementById("resultado").innerHTML = ress;

    }
}


function eejemplouno() {
    let a = prompt("digite hasta que numero quiere ver los numeros pares");
    suma = "";
    su = parseInt(a) + 1;
    ress = "";
    for (let i = 1; i < su; i++) {

        if (i == 0) {
            i++;
        }
        ress += i * 2 + " ";

    } document.getElementById("resultado").innerHTML = ress;


}



var aleatorio = Math.floor(Math.random() * 10) + 1;

var aleatorio2 = Math.floor(Math.random() * 10) + 1;

var intentos = 0;

var correcto = false;

function facil() {
    while (correcto == false) {
        var entrada = prompt("Introduzca un número del 1 al 10: ");
        if (entrada == null) {
            return;
        }
        
        intentos++;
        if (entrada == aleatorio) {
            alert("Correcto! Usaste " + intentos + " intentos.");
            correcto = true;
            document.getElementById('resp').innerHTML = intentos;
            document.getElementById('num').innerHTML = aleatorio;
        } else {
            alert(entrada + " no es el número correcto, intentos usados: " + intentos);
        }
    }
}

function media() {
 
    while (correcto == false && intentos < 5) {
        var entrada = prompt("Introduzca un número del 1 al 10: ");
        if (entrada == null) {
            
            return;
        }
        intentos++;
        
        if (entrada == aleatorio) {
            alert("Correcto! Usaste " + intentos + " intentos.");
            correcto = true;
            document.getElementById('respdos').innerHTML = intentos;
            document.getElementById('numdos').innerHTML = aleatorio;
        } else {
            alert(entrada + " no es el número correcto, intentos usados: " + intentos);
            
        }
    }
    if (intentos == 5) {
        alert("Game Over, no acertaste al número correcto.")
        document.getElementById('fallo').innerHTML = "El número correcto era: " + aleatorio2;
        
    }
}

function dificil() {

    while (correcto == false && intentos < 3) {
        var entrada = prompt("Introduzca un número del 1 al 10: ");
        if (entrada == null) {
            return;
        }
        intentos++;

        if (entrada == aleatorio) {
            alert("Correcto! Usaste " + intentos + " intentos.");
            correcto = true;
            document.getElementById("resptres").innerHTML = intentos;
            document.getElementById('numtres').innerHTML =+aleatorio;
        } else {
           
           // alert(entrada + " no es el número correcto, intentos usados: " + intentos);//
            
        } document.getElementById("resptres").innerHTML = intentos;
    }


    if (intentos == 3) {
        alert("Game Over, no acertaste al número correcto.")
        document.getElementById('fallodos').innerHTML = "El número correcto era: " + aleatorio2 +"<br>"+"usaste "+intentos+" intentos";


    }
}






function serie(){
    const serie=[];
    let i=1;
    let n=prompt("numeros en serie de 5");
    while(i<=n){
        serie[i-1]=i*5;
        i++;
    } 
    let texto = "<ul>";
    for (let j = 0; j < serie.length; j++) {               //importante el length por por que omite el cero en una serie ver ejercicio 1 para comparar//
      texto =texto+ "<li>" + serie[j] + "</li>";
    }
    texto += "</ul>";
    document.getElementById("idserie").innerHTML=texto;   
}



function aea(){
    var aleatoriotres = Math.floor(Math.random() * 100) ;

    if(aleatoriotres<10){
    
        aleatoriotres=Math.floor(Math.random() * 100);
    
    }
    document.getElementById("IdAl").innerHTML=aleatoriotres;
}







function multiplos(){
    const multiplos=[];
    let i=1;
    let n=prompt("multiplos de 3");
    while(i<=n){
        multiplos[i-1]=i*3;
        i++;
    } 
    let texto = "<ul>";
    for (let j = 0; j < multiplos.length; j++) {
      texto =texto+ "<li>" + multiplos[j] + "</li>";
    }
    texto += "</ul>";
    document.getElementById("idmultiplos").innerHTML=texto;   
}

