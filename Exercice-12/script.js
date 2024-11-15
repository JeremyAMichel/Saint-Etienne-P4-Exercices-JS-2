function carre(nombre) {
    return nombre ** 2;
}

let nombre = prompt("Veuillez saisir un nombre:");

let resultat = carre(Number(nombre));

alert("Le carré de " + nombre + " est " + resultat);