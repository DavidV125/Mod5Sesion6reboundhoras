let contador = 0;
let tiemposIniciales = { 
    paris: null, 
    londres: null, 
    nuevaYork: null,
    sanPetersburgo: null,
    beijing: null,
    bogota: null,
    seul: null 
};

function mostrarHora() {
    let d = new Date();
    document.getElementById("relojChile").innerHTML = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
    contador += 1;

    if (contador === 3 && !tiemposIniciales.paris) {
        tiemposIniciales.paris = d.getTime(); // Guardar tiempo inicial para París
    }

    if (contador === 5 && !tiemposIniciales.londres) {
        tiemposIniciales.londres = d.getTime(); // Guardar tiempo inicial para Londres
    }

    if (contador === 7 && !tiemposIniciales.nuevaYork) {
        tiemposIniciales.nuevaYork = d.getTime(); // Guardar tiempo inicial para Nueva York
    }

    if (contador === 9 && !tiemposIniciales.sanPetersburgo) {
        tiemposIniciales.sanPetersburgo = d.getTime(); // Guardar tiempo inicial para San Petersburgo
    }

    if (contador === 11 && !tiemposIniciales.beijing) {
        tiemposIniciales.beijing = d.getTime(); // Guardar tiempo inicial para Beijing
    }

    if (contador === 13 && !tiemposIniciales.bogota) {
        tiemposIniciales.bogota = d.getTime(); // Guardar tiempo inicial para Bogotá
    }

    if (contador === 15 && !tiemposIniciales.seul) {
        tiemposIniciales.seul = d.getTime(); // Guardar tiempo inicial para Seúl
    }

    // Actualizar las horas de las ciudades
    if (tiemposIniciales.paris) {
        let dParis = new Date(tiemposIniciales.paris + 5 * 60 * 60 * 1000);
        document.getElementById("relojParis").innerHTML = `${dParis.getHours()}:${dParis.getMinutes()}:${dParis.getSeconds()}`;
    }
    if (tiemposIniciales.londres) {
        let dLondres = new Date(tiemposIniciales.londres + 5 * 60 * 60 * 1000);
        document.getElementById("relojLondres").innerHTML = `${dLondres.getHours()}:${dLondres.getMinutes()}:${dLondres.getSeconds()}`;
    }
    if (tiemposIniciales.nuevaYork) {
        let dNuevaYork = new Date(tiemposIniciales.nuevaYork + 3 * 60 * 60 * 1000);
        document.getElementById("relojNuevaYork").innerHTML = `${dNuevaYork.getHours()}:${dNuevaYork.getMinutes()}:${dNuevaYork.getSeconds()}`;
    }
    if (tiemposIniciales.sanPetersburgo) {
        let dSanPetersburgo = new Date(tiemposIniciales.sanPetersburgo + 6 * 60 * 60 * 1000);
        document.getElementById("relojSanPetersburgo").innerHTML = `${dSanPetersburgo.getHours()}:${dSanPetersburgo.getMinutes()}:${dSanPetersburgo.getSeconds()}`;
    }
    if (tiemposIniciales.beijing) {
        let dBeijing = new Date(tiemposIniciales.beijing + 11 * 60 * 60 * 1000);
        document.getElementById("relojBeijing").innerHTML = `${dBeijing.getHours()}:${dBeijing.getMinutes()}:${dBeijing.getSeconds()}`;
    }
    if (tiemposIniciales.bogota) {
        let dBogota = new Date(tiemposIniciales.bogota - 3 * 60 * 60 * 1000);
        document.getElementById("relojBogota").innerHTML = `${dBogota.getHours()}:${dBogota.getMinutes()}:${dBogota.getSeconds()}`;
    }
    if (tiemposIniciales.seul) {
        let dSeul = new Date(tiemposIniciales.seul + 14 * 60 * 60 * 1000);
        document.getElementById("relojSeul").innerHTML = `${dSeul.getHours()}:${dSeul.getMinutes()}:${dSeul.getSeconds()}`;
    }

    // Volver a llamar a la función después de 1 segundo
    setTimeout(mostrarHora, 1000);
}

// Iniciar la primera llamada
mostrarHora();
