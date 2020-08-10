var minas = inicializaMatriz();

//Funcion
function inicializaMatriz() {
    var tabla = [];
    for (var i = 0; i < 10; i++) {
        tabla[i] = [0, 0, 0, 0, 0, 0, 0, 0,0,0];
    }
    return tabla;
}

//// Funcion para crear el tablero para el juego de minas////
function crearTablero() {
    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
            var div = document.createElement("div");
            div.id = i + "" + j;
            div.addEventListener("click", mostrarNumero, true);
            tablerominas.appendChild(div);
        }
    }

}