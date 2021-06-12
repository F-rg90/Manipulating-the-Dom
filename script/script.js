let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();

  // Do all of your work inside the document.addEventListener

  // Part 1
const mainTitle = document.querySelector('#main-title')
mainTitle.innerHTML = '<strong> The names Dom. when youre here, youre family </strong>'
  // Part 2
const body = document.querySelector('body')
body.style.backgroundColor = 'red'

  // Part 3
  const favoriteThings = document.querySelector('#favorite-things');
  console.log(favoriteThings)
  favoriteThings.removeChild(favoriteThings.lastElementChild);

  // Part 4
const quoteTitle = document.querySelector('#quote-title')
quoteTitle.style.fontSize = '2rem';

const domAdventures = document.querySelector('#dom-adventures')
domAdventures.style.fontSize = '2rem';

  // Part 5
const pastRaces = document.querySelector('#past-races');
// const sideBar = document.querySelector('.side-bar li');
pastRaces.removeChild(pastRaces.children[3]);``


  // Part 6

  function addRace(name) {
    let li = document.createElement('li');
    li.textContent = name;
    return li;
  }
pastRaces.appendChild(addRace('NewYork'));


  // Part 7
//check CSS

  // Part 8
  const click = function(){
    quoteTitle.addEventListener('click', (evt) => {
        randomQuote();
      })
    }
    click()
  // Part 9
  const switchColor = function() {
    const blogPosts = document.querySelectorAll('.blog-post');
    for (let words of blogPosts){
      words.addEventListener('mouseout', (evt) => {
        words.classList.toggle('purple');
      })
      words.addEventListener('mouseenter', (evt) => {
        words.classList.toggle('red');
      })
    }

  }
  switchColor()



});
