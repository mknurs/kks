/*
variables
*/
// const articles = document.getElementsByTagName("article");
const articles = document.getElementsByClassName("card");

const resolution = 100;
const iter = 150;
const maxIteratio = 100;
const elementCount = 3;
const pixelRatio = 1.5;

/*
helper functions
*/
/*
Random integer generator between min and max. The maximum is exclusive and the 
minimum is inclusive
*/
const randomInt = (max) => Math.floor(Math.random() * max);

/*
Randomize array in-place using Durstenfeld shuffle algorithm
*/
/*
It is not required to return array since JavaScript passes arrays by reference 
when used as function arguments. I assume this is to save on stack space, but 
it's an interesting little feature. Performing the shuffle on the array will 
shuffle the original array 
*/
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

for (article of articles) {
  let width = article.offsetWidth;
  let height = article.offsetHeight;

  let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", `0 0 ${width} ${height}`);

  let steps = [];
  let xStep = Math.floor(width / resolution);
  let yStep = pixelRatio * xStep;
  for (let i = 0; i < iter; i++) {
    steps.push(`h${xStep}`, `h${-xStep}`, `v${yStep}`, `v${-yStep}`);
    steps.push(`h${xStep}`, `h${-xStep}`);
  }
  steps = shuffleArray(steps);

  let path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("d", `M ${randomInt(width)} ${randomInt(height)} ` + steps.join(""));

  svg.appendChild(path);
  article.appendChild(svg);
};