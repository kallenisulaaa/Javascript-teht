const osallistujat = prompt("Anna osallistujien määrä")

const numero = parseInt(osallistujat)

if (numero > 0) {
  const osallistuja = [];

  for (let i = 0; i < numero; i++) {
    const nimi = prompt(`Anna ostallistujan nimi ${i + 1}:`)
    if (nimi) osallistuja.push(nimi.trim());
  }

  osallistuja.sort()

  document.write("<ol>");
  for (const nimi of osallistuja) {
    document.write(`<li>${nimi}</li>`)

  }
  document.write("</ol>");
} else {
  document.write("Väärä numero");
}