let contador = 0;

function mostrarHora() {
    let d = new Date();

    document.getElementById("relojChile").innerHTML = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;

    contador = contador + 1;

    if (contador == 3) {
        // 5 horas más para París https://www.30secondsofcode.org/js/s/date-difference/
        let dParis = new Date(d.getTime() + 5 * 60 * 60 * 1000); // Añadir 5 horas en milisegundos
        document.getElementById("relojParis").innerHTML = `${dParis.getHours()}:${dParis.getMinutes()}:${dParis.getSeconds()}`;
    }

    if (contador == 5) {

        let dLondres = new Date(d.getTime() + 4 * 60 * 60 * 1000); 
        document.getElementById("relojLondres").innerHTML = `${dLondres.getHours()}:${dLondres.getMinutes()}:${dLondres.getSeconds()}`;
    }

    if (contador == 7) {

        let dNuevaYork = new Date(d.getTime() + 4 * 60 * 60 * 1000); 
        document.getElementById("relojNuevaYork").innerHTML = `${dNuevaYork.getHours()}:${dNuevaYork.getMinutes()}:${dNuevaYork.getSeconds()}`;
    }
    //else cancelar intervalo clear
}


setInterval(mostrarHora, 1000);