const estudanteReprovou = function (notaFinal, faltas){
    return notaFinal < 7 && faltas > 4 ? true : false;
}

console.log(estudanteReprovou(6,3));