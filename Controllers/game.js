var minas = inicializaMatriz();

function inicializaMatriz() {
    var tabla = [];
    for (var i = 0; i < 10; i++) {
        tabla[i] = [0, 0, 0, 0, 0, 0, 0, 0,0,0];
    }
    return tabla;
}