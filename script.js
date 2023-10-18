//your code here

let sen = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];
let regix = /\bthe\b|\ban\b|\ba\b/gi;
let jan = [];
let map = {};

for (let i = 0; i < sen.length; i++) {
  let articlelessArray = sen[i].replace(regix, ' ').trim();
  articlelessArray = articlelessArray.replace(/  /g, ' ');
  jan.push(articlelessArray);
  map[articlelessArray] = sen[i];
}

jan.sort();

const ulElement = document.getElementById('bands');

for (let i = 0; i < jan.length; i++) {
  const liElement = document.createElement('li');
  liElement.textContent = map[jan[i]];
  ulElement.appendChild(liElement);
}


