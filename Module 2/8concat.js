function concat(array) {
  let tulos = '';

  for (let i = 0; i < array.length; i++) {
    tulos += array[i];
  }

  document.write(tulos);
}

const array = ["Mikael", "Oskari", "Iivo", "!"]
concat(array);