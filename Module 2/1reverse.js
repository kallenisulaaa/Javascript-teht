const numbers = []
numbers[0] = prompt("Anna numero!")
numbers[1] = prompt("Anna toinen numero!!")
numbers[2] = prompt("Annappa vielä kolmas!!!")
numbers[3] = prompt("Vielä neljäs!!!!")
numbers[4] = prompt("no jos sitä vielä yks")

for (let i = 0; i < numbers.length; i++) {
  console.log(`${numbers[i]}`)
}