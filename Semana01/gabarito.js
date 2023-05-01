var numeroVezes;
var numeroVezesAnterior = 0;
var moda = 0;
var vetor = [5, 5, 2, 3, 1, 3, 8];

for (var i = 0; i < vetor.length; i++) {
    numeroVezes = 1;

    for (var j = 0; j < vetor.length; j++) {
        if (vetor [i] == vetor[j]) {
            numeroVezes++;
        }
    }

    if (numeroVezes > numeroVezesAnterior) {
        moda = vetor[i];
        numeroVezesAnterior = numeroVezes;
    }
}

console.log("A moda é " + moda + ".")