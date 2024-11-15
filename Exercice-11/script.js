let number = prompt("Veuillez saisir un nombre compris entre 1 et 10:");

if (number < 1 || number > 10) {
    alert("Le nombre saisi n'est pas compris entre 1 et 10.");
} else if (number < 5) {
    alert("Le nombre saisi est inférieur à 5.");
} else if (number == 5) {
    alert("Le nombre saisi est égal à 5.");
} else {
    alert("Le nombre saisi est supérieur à 5.");
}