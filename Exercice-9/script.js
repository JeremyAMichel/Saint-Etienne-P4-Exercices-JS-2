// const number = parseInt(prompt("Veuillez saisir un nombre : "));

let number;

while(Number.isInteger(number) === false ){
    number = Number(prompt("Veuillez saisir un nombre : "));
}

let resultat = "";

for (let i = 1; i <= 10; i += 1) {
  resultat += number + " X "+ i + " = " + number * i + "\n";
}

alert(resultat)



