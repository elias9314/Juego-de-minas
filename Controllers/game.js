var minas = inicializaMatriz();

//Funcion matriz
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

//Mostar numeros 

function mostrarNumero(e) {
    var auxstr = this.id.split("");
    var myid = auxstr[0] + auxstr[1];
    divObj = document.getElementById(myid);

    if (minas[parseInt(auxstr[0], 10)][parseInt(auxstr[1], 10)] == 0) {
        divObj.style.backgroundColor = "white";
        abrirAlrededor(parseInt(auxstr[0], 10), parseInt(auxstr[1], 10), minas);
    } else {
        if (minas[parseInt(auxstr[0], 10)][parseInt(auxstr[1], 10)] != "*") {
            document.getElementById(myid).innerHTML = "<p style='margin-top:15px;'>" + minas[parseInt(auxstr[0], 10)][parseInt(auxstr[1], 10)] + "</p>";
            divObj.style.backgroundColor = "white";
        } else {
            divObj.style.backgroundImage = "url(../images/bomba.png)";
            abrirTablero(minas);
            setTimeout(function(){ location.reload(); }, 300);
        }
    }
}

//funcion para conocer el numero de bombas que hay alrededor 
function bombasAlrededor(tablero) {
    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
            if (tablero[i][j] == "*") {
                if (i == 0 && j == 0) {
                    colocaNumeroBombas(i, j, i + 1, j + 1, tablero);
                }
                else if (i == 0 && (j > 0 && j < 9)) {
                    colocaNumeroBombas(i, j - 1, i + 1, j + 1, tablero);
                }
                else if (i == 0 && (j > 0 && j < 9)) {
                    colocaNumeroBombas(i, j - 1, i + 1, j + 1, tablero);
                }
                else if (i == 0 && (j > 0 && j < 9)) {
                    colocaNumeroBombas(i, j - 1, i + 1, j + 1, tablero);
                }
                else if (i == 0 && j == 9) {
                    colocaNumeroBombas(i, j - 1, i + 1, j, tablero);
                }
                else if (j == 9 && (i > 0 && i < 9)) {
                    colocaNumeroBombas(i - 1, j - 1, i + 1, j, tablero);
                }
                else if (i == 9 && j == 9) {
                    colocaNumeroBombas(i - 1, j - 1, i, j, tablero);
                }
                else if (i == 9 && (j > 0 && j < 9)) {
                    colocaNumeroBombas(i - 1, j - 1, i, j + 1, tablero);
                }
                else if (i == 9 && j == 0) {
                    colocaNumeroBombas(i - 1, j, i, j + 1, tablero);
                }
                else if (j == 0 && (i > 0 && i < 9)) {
                    colocaNumeroBombas(i - 1, j, i + 1, j + 1, tablero);
                } else {
                    colocaNumeroBombas(i - 1, j - 1, i + 1, j + 1, tablero);
                }
            }
        }
    }
}
