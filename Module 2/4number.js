const numbers = []

while (true) {
  const input = parseFloat(prompt("Anna numero (anna 0 lopettaaksesi)"));

  if (input === 0) {
    break
  }

  if (!isNaN(input)) {
    numbers.push(input);
  } else {
    console.log("Väärä syöttö. Anna oikea numero.")
  }
}

numbers.sort((a, b) => b - a);

console.log(numbers)