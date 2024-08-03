let coinSound = new Audio('./sounds/mario-money-sound-edit.mp3');
let oneUp = new Audio('./sounds/smb_1-up.mp3');
let bump = new Audio('./sounds/smb_bump.mp3');
let soundButton = document.querySelector("#sound-button");

coinSound.volume = 0;
oneUp.volume = 0;
bump.volume = 0;

let volumeMode = "off";

const audioSettings = function () {
    if (volumeMode === 'off') {
        volumeMode = 'on';
        coinSound.volume = 0.5;
        oneUp.volume = 0.5;
        bump.volume = 0.5;
        soundButton.classList.add("sound-on");
        soundButton.classList.remove("sound-off");
        localStorage.setItem('switch', volumeMode);
    }
    // If mode is light, apply dark background
    else {
        volumeMode = 'off';
        coinSound.volume = 0;
        oneUp.volume = 0;
        bump.volume = 0;
        soundButton.classList.add("sound-off");
        soundButton.classList.remove("sound-on");
        soundButton.setAttribute('class', 'sound-off');
        localStorage.setItem('switch', volumeMode);
    }
};

soundButton.addEventListener('click', audioSettings);

