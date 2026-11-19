/* TEMA BLACK: liga ate o fim da Black */
if(Date.now()<=Date.parse("2026-11-27T23:59:59-03:00"))document.documentElement.classList.add("black");
const printButton = document.querySelector('#print');
printButton.hidden = false;
printButton.addEventListener('click', () => window.print());
