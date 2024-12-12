'use strict';
const names = ['John', 'Paul', 'Jones'];

const targetElement = document.getElementById("target")

let content = '<ul>';

for (let i = 0; i < names.length; i++) {
  content += `<li>${names[i]}</li>`
}

content += '</ul>'

targetElement.innerHTML = content