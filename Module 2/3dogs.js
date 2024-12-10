dawgs = []
dawgs[0] = prompt("Nimeä ensimmäinen koira")
dawgs[1] = prompt("Nimeä toinen koira")
dawgs[2] = prompt("Nimeä kolmas koira")
dawgs[3] = prompt("Nimeä neljäs koira")
dawgs[4] = prompt("Nimeä viides koira")
dawgs[5] = prompt("Nimeä kuudes koira")

function dawg() {
  let ul = document.getElementById('dawgs')
  dawgs.forEach(function(dawgs) {
    let li = document.createElement('li');
    li.textContent = dawgs
    ul.appendChild(li);
  });
}