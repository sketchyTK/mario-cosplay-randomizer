const player1submit = document.querySelector('#submit');
const marioModal = document.querySelector('.modal');
const closeModal = document.querySelector('.closeModal');
const marioName = document.querySelector('.marioName');
//add an array of Mario images with text as well
const babyMario = {
   name: 'Baby',
   src: './img/baby-mario.png',
};
const beeMario = {
   name: 'Bee',
   src: './img/bee-mario.png',
};
const booMario = {
   name: 'Boo',
   src: './img/boo-mario.png',
};
const builderMario = {
   name: 'Builder',
   src: './img/builder-mario.jpg',
};
const capeMario = {
   name: 'Super',
   src: './img/cape-mario.png',
};
const catMario = {
   name: 'Cat',
   src: './img/cat-mario.png',
};
const classicMario = {
   name: 'OG',
   src: './img/classic-mario.png',
};
const doctorMario = {
   name: 'Doctor',
   src: './img/dr-mario.png',
};
const elephantMario = {
   name: 'Elephant',
   src: './img/eleph-mario.jpg',
};
const fireMario = {
   name: 'Fire',
   src: './img/fire-mario.png',
};
const fluddMario = {
   name: 'Sunshine',
   src: './img/fludd-mario.png',
};
const frogMario = {
   name: 'Frog',
   src: './img/frog-mario.png',
};
const golfMario = {
   name: 'Golf',
   src: './img/golf-mario.jpg',
};
const propMario = {
   name: 'Propellar',
   src: './img/prop-mario.jpg',
};
const tanookiMario = {
   name: 'Tanooki',
   src: './img/tanooki-mario.png',
};
const trexMario = {
   name: 'Dino',
   src: './img/trex-mario.png',
};
const tuxMario = {
   name: 'Tuxedo',
   src: './img/tux-mario.png',
};
const marioGif = {
   'src': './img/marios-gif.gif'
};

//console.log(babyMario);
const marioPics = [babyMario, builderMario,catMario, beeMario, booMario, capeMario, classicMario, doctorMario,elephantMario,fireMario,fluddMario,frogMario,golfMario,propMario,tanookiMario,trexMario,tuxMario];

//console.log(marioPics);
const displayMarioPic = function () {
   //display modal -> 
   marioModal.setAttribute( 'style', 'display: block;');
   let secondsLeft = 2;
   function setTime() {
   
   let timerInterval = setInterval(function () { 
   secondsLeft--; 
 //  console.log(secondsLeft);
   if (secondsLeft === 0) {
      // Stops execution of action at set interval 
      clearInterval(timerInterval);
      // Calls function to create and append image
      marioImg.setAttribute('style', 'display: block;');
      marioTxt.setAttribute('style', 'display: block;');
      marioName.setAttribute('style', 'display: inline-block;');
      playMarioGif.setAttribute('style', 'display: none;');
   }
   }, 1000);
}
   setTime();
   const getPlayerName = document.querySelector('#player1');
   const player1SaveName = getPlayerName.value;
   localStorage.setItem('player1', player1SaveName);
   
   const player1Name = localStorage.getItem('player1');
   let playMarioGif = document.createElement('img');
   playMarioGif.setAttribute(
      'src', marioGif['src']
   );
   document.getElementById('marioModalWrapper').appendChild(playMarioGif); 
  // console.log(getPlayerName);
  // console.log(player1Name);
   // Clear the top player table
 // randoMario.innerHTML = '';
        // Get the mario image
  let marioImg = document.createElement('img');
  let marioTxt = document.createElement('p');
  //console.log('image tag created');
  // const randoMario = [Math.floor(Math.random() * marioPics.length)];
  //let targetMario = marioPics[randoMario];
   let targetMario = marioPics[Math.floor(Math.random() * marioPics.length)];
//   console.log(targetMario);
  marioImg.setAttribute(
        'src' , targetMario['src']
    );
   marioImg.setAttribute('style', 'display: none;');
   marioTxt.setAttribute('style', 'display: none;');
   marioName.setAttribute('style', 'display: none;');
   const randomMarioName = targetMario['name'];
 //  console.log(randomMarioName);
   marioTxt.textContent = `You've Got ${randomMarioName} Mario!`;
   //display randomized Mario image
//   console.log(marioTxt);
   localStorage.setItem('marioPlayerName', randomMarioName);

   marioName.textContent = `${randomMarioName} ${player1Name}`;
   document.getElementById('marioModalWrapper').appendChild(marioImg);
  // display Mario text
   document.getElementById('marioModalWrapper').appendChild(marioTxt);
   localStorage.removeItem(player1SaveName);
   localStorage.removeItem('marioPlayerName');

   closeModal.addEventListener('click', () => {
      marioModal.setAttribute('style', 'display: none;');
      marioImg.remove();
      marioTxt.remove();
   }
   );
};

//Add Event Listener - click - submit
player1submit.addEventListener('click', displayMarioPic);

let coinSound = new Audio('./sounds/mario-money-sound-edit.mp3');
let oneUp = new Audio('./sounds/smb_1-up.mp3');
let bump = new Audio('./sounds/smb_bump.mp3');

coinSound.volume = 0.5;
oneUp.volume = 0.5;
bump.volume = 0.5;

const coinTotal = document.querySelector('.coinTotal');
const questionBlock = document.querySelector('.question-block');
let coins = sessionStorage.getItem('savedCoins');
coinTotal.textContent = coins;
sessionStorage.removeItem('savedCoins');
sessionStorage.setItem('savedCoins', 0);
questionBlock.addEventListener('click', function () {
   // if the coin total is less that 99, then add 1
   if (coins <= 8) {
      coins++;
      coinTotal.textContent = coins;
      coinSound.play();
       bump.play();
      sessionStorage.setItem('savedCoins', coins);
      questionBlock.classList.add("coinBounce");
   } else {
      coins = 0;
      //    questionBlock.classList.remove("coinBounce");
      oneUp.play();
       bump.play();
      coinSound.pause();
      coinTotal.textContent = coins;
      sessionStorage.setItem('savedCoins', 0);
   }
   //event listener is not working

});

questionBlock.addEventListener('animationend', () => {
   console.log("animation ended");
   questionBlock.classList.remove("coinBounce");
});

